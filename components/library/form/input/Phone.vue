<template>
  <UFormGroup
    :ui="{
      label: {
        base: 'text-white',
      },
    }"
    :name="name"
    :label="label"
    :error="modelValue && !results.isValid"
  >
    <UButtonGroup
      :ui="{
        shadow: 'shadow-none',
        wrapper: {
          horizontal: 'bg-white',
        },
      }"
      class="w-full"
    >
      <USelectMenu
        v-model="selectedCountry"
        :options="countries"
        searchable
        searchable-placeholder="Search..."
        clear-search-on-close
        value-attribute="id"
      />
      <UInput
        type="tel"
        :model-value="phoneNumber"
        :placeholder="inputLabel"
        :trailing-icon="
          modelValue && !results.isValid
            ? 'i-heroicons-exclamation-triangle-20-solid'
            : 'i-heroicons-check-20-solid'
        "
        @update:model-value="
          onPhoneNumberChanged({
            newPhoneNumber: $event,
            autoFormat,
            noFormattingAsYouType: false,
          })
        "
        class="w-full"
      />
    </UButtonGroup>
  </UFormGroup>
</template>

<script setup>
import { getCountries, getCountryCallingCode } from "libphonenumber-js";

defineProps({
  modelValue: { type: null, required: true },
  name: { type: String },
  label: { type: String },
});

const emit = defineEmits(["update:modelValue"]);

const {
  getPhoneNumberExamplesFile,
  getPhoneNumberExample,
  getPhoneNumberResults,
  sanitizePhoneNumber,
} = usePhoneNumber();
const phoneNumber = ref("");
const autoFormat = ref(true);
const selectedCountry = ref("SG");
const results = ref({ isValid: false, countryCode: undefined });

const inputLabel = computed(() => {
  const defaultPlaceholder = "example";
  const example = getPhoneNumberExample(examples.value, selectedCountry.value);
  return example || defaultPlaceholder;
});

let displayNamesInstance;
let displayNamesLocale;

const getCountryName = (locale, code, customCountriesNameListByIsoCode) => {
  if (customCountriesNameListByIsoCode?.[code]) {
    return customCountriesNameListByIsoCode[code];
  }

  if (displayNamesLocale !== locale || !displayNamesInstance) {
    displayNamesLocale = locale;
    displayNamesInstance = new Intl.DisplayNames([locale], { type: "region" });
  }

  return displayNamesInstance.of(code);
};

const { data: examples } = await useAsyncData(() =>
  getPhoneNumberExamplesFile()
);
const { data: countries } = await useAsyncData(async () => {
  const isoList = getCountries();
  return isoList
    .map((iso2) => ({
      id: iso2,
      label: `${getCountryName("en-US", iso2)} (+${getCountryCallingCode(
        iso2
      )})`,
    }))
    .filter((country) => country.label);
});

watch(
  () => selectedCountry.value,
  (value, oldValue) => {
    if (value && value !== oldValue) {
      onCountryChanged({
        countryCode: value,
        autoFormat: autoFormat.value,
        noFormattingAsYouType: false,
      });
    }
  },
  { immediate: true }
);

function onPhoneNumberChanged({
  newPhoneNumber,
  autoFormat,
  noFormattingAsYouType,
  updateResults = true,
}) {
  if (!/^[\d\s]*$/.test(newPhoneNumber)) {
    results.value = { isValid: false, countryCode: undefined };
    emit("update:modelValue", results.value);
    return;
  }

  const sanitizedPhoneNumber = sanitizePhoneNumber(newPhoneNumber);
  if (!sanitizedPhoneNumber) {
    results.value = { isValid: false, countryCode: undefined };
    emit("update:modelValue", null);
  } else if (updateResults) {
    results.value = getPhoneNumberResults({
      phoneNumber: sanitizedPhoneNumber,
      countryCode: selectedCountry.value,
    });
    emit("update:modelValue", results.value);
  }

  phoneNumber.value =
    results.value.isValid && results.value.formatNational && autoFormat
      ? results.value.formatNational
      : sanitizedPhoneNumber;

  if (
    results.value.countryCode &&
    results.value.countryCode !== selectedCountry.value
  ) {
    onCountryChanged({
      countryCode: results.value.countryCode,
      autoFormat,
      noFormattingAsYouType,
      updateResults: false,
    });
  }
}

function onCountryChanged({
  countryCode,
  autoFormat,
  noFormattingAsYouType,
  updateResults = true,
}) {
  if (updateResults) {
    results.value = getPhoneNumberResults({
      phoneNumber: phoneNumber.value,
      countryCode,
    });
  }

  onPhoneNumberChanged({
    newPhoneNumber: phoneNumber.value,
    autoFormat,
    noFormattingAsYouType,
    updateResults,
  });
}
</script>
