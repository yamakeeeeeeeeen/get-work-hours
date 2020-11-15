import {
  ArrayField,
  FieldElement,
  FieldErrors,
  FieldName,
  Ref,
  UnpackNestedValue,
  ValidationRules,
} from 'react-hook-form';

export type Errors = FieldErrors<Record<string, any>>;
export type GetValues = {
  (): UnpackNestedValue<Record<string, any>>;
  <TFieldName extends string, TFieldValue extends unknown>(name: TFieldName): TFieldName extends keyof Record<
    string,
    any
  >
    ? UnpackNestedValue<Record<string, any>>[TFieldName]
    : TFieldValue;
  <TFieldName extends keyof Record<string, any>>(names: TFieldName[]): UnpackNestedValue<
    Pick<Record<string, any>, TFieldName>
  >;
};
export type Register = {
  <TFieldElement extends FieldElement<Record<string, any>>>(rules?: ValidationRules): (
    ref: (TFieldElement & Ref) | null,
  ) => void;
  (name: FieldName<Record<string, any>>, rules?: ValidationRules): void;
  <TFieldElement extends FieldElement<Record<string, any>>>(
    ref: (TFieldElement & Ref) | null,
    rules?: ValidationRules,
  ): void;
};
export type Fields = Partial<ArrayField<Record<string, any>, 'id'>>[];
export type Append = (
  value: Partial<Record<string, any>> | Partial<Record<string, any>>[],
  shouldFocus?: boolean,
) => void;
export type Remove = (index?: number | number[]) => void;
