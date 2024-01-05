import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LibyanValidatorsService {

  constructor() { }

  PhoneNumberValidations(control: AbstractControl): { [key: string]: any } | null {
    const phoneNumber: string = control.value == null ? '' : control.value.toString();
    if (phoneNumber == "")
      return null;
    var number = phoneNumber[0] + "" + phoneNumber[1] + phoneNumber[2];
    if (number != '091' && number != '092' && number != '094' && number != '095') {
      return {
        phoneError: 'يجب ان تكون بداية الرقم 091 او 092 او 094 او 095'
      }
    } else if (phoneNumber.length != 10) {
      return {
        phoneError: 'عدد خانات رقم الهاتف غير صحيحة'
      }
    }
    return null
  }

  LibyanaPhoneNumberValidations(control: AbstractControl): { [key: string]: any } | null {
    const phoneNumber: string = control.value == null ? '' : control.value.toString();
    if (phoneNumber == "")
      return null;
    var number = phoneNumber[0] + "" + phoneNumber[1] + phoneNumber[2];
    if (number != '092' && number != '094' && number != '095') {
      return {
        phoneError: 'يجب ان تكون بداية الرقم او 092 او 094 او 095'
      }
    } else if (phoneNumber.length != 10) {
      return {
        phoneError: 'عدد خانات رقم الهاتف غير صحيحة'
      }
    }
    return null
  }

  PhoneNumberLimit(control: AbstractControl): { [key: string]: any } | null {
    console.log(control);

    const phoneNumber: string = control.value == null ? '' : control.value.toString();
    if (phoneNumber == "")
      return null;
    if (phoneNumber.length != 10) {
      return {
        phoneError: 'عدد خانات رقم الهاتف غير صحيحة'
      }
    }
    return null
  }

  AlmadarPhoneNumberValidations(control: AbstractControl): { [key: string]: any } | null {
    const phoneNumber: string = control.value == null ? '' : control.value.toString();
    if (phoneNumber == "")
      return null;
    var number = phoneNumber[0] + "" + phoneNumber[1] + phoneNumber[2];
    if (number != '091' && number != '093') {
      return {
        phoneError: 'يجب ان تكون بداية الرقم او 091 او 093  '
      }
    } else if (phoneNumber.length != 10) {
      return {
        phoneError: 'عدد خانات رقم الهاتف غير صحيحة'
      }
    }
    return null
  }


  NationalNumberValidator(control: AbstractControl): { [key: string]: any } | null {
    const NationalNumber: string = control.value == null ? '' : control.value.toString();

    var Message = "";

    if ((!NationalNumber.startsWith('1')) && (!NationalNumber.startsWith('2'))) {
      Message = "الرقم الوطني في تنسيق غير صحيح "
    } else if (NationalNumber.length != 12) {
      Message = "يجب ان يكون عدد خانات الرقم الوطني 12 خانة"
    }
    return Message == "" ? null : {
      NationalNumberError: Message
    }
  }

  NationalNumberBirthDateValidator(controlName: string) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const birthDate = new Date(control.value).getFullYear();
      const nationalNumber: string = control.root.getRawValue()[controlName] == null ? '' : control.root.getRawValue()[controlName].toString();

      const dateInNationalNumber = nationalNumber.substring(1, 5);
      console.log(dateInNationalNumber);
      console.log(birthDate.toString());

      let message = '';

      if (dateInNationalNumber !== birthDate.toString()) {
        message = 'يجب أن يكون تاريخ الميلاد مطابق للرقم الوطني';
      }

      return message === '' ? null : { BirthDateError: message };
    };
  }

  NationalNumberGenderValidator(controlName: string) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const gender = control.value;
      const nationalNumber: string = control.root.value[controlName] == null ? '' : control.root.value[controlName].toString();
      let message = '';
      if ((nationalNumber.startsWith('1') && gender !== '1') || (nationalNumber.startsWith('2') && gender !== '2')) {
        message = 'يجب أن يكون الجنس و الخانة الأولى من الرقم الوطني متطابقان';
      }
      return message === '' ? null : { NationalNumberError: message };
    };
  }
}
