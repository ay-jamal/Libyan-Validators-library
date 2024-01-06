## Validation Library for Libyan Phone Numbers and National Numbers

This library provides custom validation functions specifically designed to work with Angular Reactive Forms for validating Libyan phone numbers and national numbers. It helps ensure the accuracy and validity of these numbers based on specific rules and criteria.

### Installation

You can install the library using npm. Open your terminal and run the following command:

```shell
npm i libyan-validators
```

### Validator List

| Validator Name                    | Description                                                                                 |
| --------------------------------- | ------------------------------------------------------------------------------------------- |
| PhoneNumberValidations            | Validates Libyan phone numbers and ensures the correct prefix is used.                      |
| LibyanaPhoneNumberValidations     | Validates Libyana phone numbers and ensures the correct prefix is used for Libyana network. |
| PhoneNumberLimit                  | Validates the length of the phone number and ensures it has the correct number of digits.   |
| AlmadarPhoneNumberValidations     | Validates Almadar phone numbers and ensures the correct prefix is used for Almadar network. |
| NationalNumberValidator           | Validates the Libyan national number and checks if it in correct syntax                     |
| NationalNumberWithGenderValidator | Validates the Gender By checking Libyan national number date.                               |
| NationalNumberGenderValidator     | Validates the birth date by comparing it with the birth date in the national number.        |

### Setup

in your Component Ts File import The LibyanValidatorsService

```typescript
import { LibyanValidatorsService } from "libyan-validators";
```

```typescript
  constructor(
    private libyanValidatorsService: LibyanValidatorsService
  ) {
  }
```

### Use

Add The Validator To the Validators Array In Your Form

#### expample 1

```typescript
Form = new FormGroup({
  phoneNumber: new FormControl("", [this.libyanValidatorsService.AlmadarPhoneNumberValidations]),
});
```

#### expample 2

if you want to use the NationalNumberGenderValidator or NationalNumberBirthDateValidator make sure to pass
the national number control name as parameter to the Validator

```typescript
Form = new FormGroup({
  nationalNumber: new FormControl("", [Validators.required, this.LibyanValidatorsService.NationalNumberValidator]),
  birthDay: new FormControl("", [Validators.required, this.LibyanValidatorsService.NationalNumberBirthDateValidator("nationalNumber")]),
  gender: new FormControl("", [Validators.required, this.LibyanValidatorsService.NationalNumberGenderValidator("nationalNumber")]),
});
```

### About

This library is available on [GitHub](https://github.com/ay-jamal/Libyan-Validators-library). You can find the source code, contribute to the project, and report issues or suggestions there.

If you have any issues or suggestions for improvements, please feel free to contribute to the library by opening an issue or submitting a pull request on the [GitHub repository](https://github.com/ay-jamal/Libyan-Validators-library).
