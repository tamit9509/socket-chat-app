import { createAction, props } from '@ngrx/store';
export const login = createAction(
  '[Sign up Page] Sign up',
  props<{
    name: string;
    email: string;
    phoneNumber?: string;
    password?: string;
  }>()
);