import {
  AsYouType,
  getCountries,
  getCountryCallingCode,
  getExampleNumber,
  isSupportedCountry,
  parsePhoneNumberFromString,
} from "libphonenumber-js";

function isCountryAvailable(locale) {
  try {
    const response = isSupportedCountry(locale);

    if (!response) {
      console.error(
        `(PhoneNumberInput) The code country "${locale}" is not available`
      );

      return false;
    }

    return response;
  } catch (error) {
    console.error(`(PhoneNumberInput) ${error}`);
    return false;
  }
}

function sanitizePhoneNumber(input) {
  if (!input) {
    return "";
  }
  const regex = new RegExp(/[^\d ()+-]/g); // Keep only digits, (), - and + characters

  return input.replaceAll(regex, "").trim(); // Keep only digits, (), - and + characters
}

function getPhoneNumberResults({ phoneNumber, countryCode }) {
  try {
    if (!phoneNumber) {
      return {
        isValid: false,
        countryCode,
      };
    }

    const parsedNumber = parsePhoneNumberFromString(phoneNumber, countryCode);

    return {
      countryCode: parsedNumber?.country ?? countryCode,
      isValid: parsedNumber?.isValid() ?? false,
      isPossible: parsedNumber?.isPossible(),
      countryCallingCode: parsedNumber?.countryCallingCode,
      nationalNumber: parsedNumber?.nationalNumber,
      type: parsedNumber?.getType(),
      formatInternational: parsedNumber?.formatInternational(),
      formatNational: parsedNumber?.formatNational(),
      uri: parsedNumber?.getURI(),
      e164: parsedNumber?.format("E.164"),
      rfc3966: parsedNumber?.format("RFC3966"),
      phoneNumber,
    };
  } catch (error) {
    throw new Error(`(getResultsFromPhoneNumber) ${error}`);
  }
}

function getAsYouTypeFormat(countryCode, phoneNumber) {
  try {
    if (!phoneNumber) {
      return "";
    }

    return new AsYouType(countryCode).input(phoneNumber);
  } catch (error) {
    throw new Error(`(getAsYouTypeFormat) ${error}`);
  }
}

async function getPhoneNumberExamplesFile() {
  const { default: data } = await import(
    "libphonenumber-js/examples.mobile.json"
  );
  return data;
}

function getPhoneNumberExample(examples, countryCode) {
  try {
    if (!examples) {
      return;
    }

    return countryCode
      ? getExampleNumber(countryCode, examples)?.formatNational()
      : undefined;
  } catch (error) {
    console.error(`(PhoneNumberInput) ${error}`);
  }
}

export function usePhoneNumber() {
  function isSameCountryCallingCode(countryCode, countryCode2) {
    return (
      getCountryCallingCode(countryCode) === getCountryCallingCode(countryCode2)
    );
  }

  return {
    getAsYouTypeFormat,
    getPhoneNumberResults,
    getPhoneNumberExamplesFile,
    getPhoneNumberExample,
    isSameCountryCallingCode,
    isCountryAvailable,
    getCountries,
    getCountryCallingCode,
    sanitizePhoneNumber,
  };
}
