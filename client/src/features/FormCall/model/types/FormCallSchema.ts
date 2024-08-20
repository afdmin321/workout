import { StartQueryActionCreatorOptions } from '@reduxjs/toolkit/dist/query/core/buildInitiate';

export interface FormCallType {
  name?: string;
  phone?: string;
  errorName?: string;
  errorPhone?: string;
  submiteDisabled: boolean;
}

export interface FormCallSchema {
  data: FormCallType;
  isLoading: boolean;
  error?: string;
}
