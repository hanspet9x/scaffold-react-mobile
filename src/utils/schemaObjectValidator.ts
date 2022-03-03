type SchemaRecord = {
    errorMessage?: string;
    test: (value: any) => boolean;
  };

  type SchemaResult = {
    error: boolean;
    errorMessages: string[];
  };

export type ISchemaStructure<T> =
Record<keyof T, SchemaRecord>;

  type SchemaAccumulator = {
    error: boolean[];
    key: string[];
  };

export const schemaValidator = <T>(
  data: any,
  schema: ISchemaStructure<T>,
): SchemaResult => {
  try {
    const result = Object.entries(data).reduce((result, [key, value]) => {
      const schemaTest = (schema as any)[key];
      if (schemaTest) {
        const errResult = schemaTest.test(value);
        if (!errResult) {
          return {
            ...result,
            error: result.error ? [...result.error, true] : [true],
            key: result.key ? [
              ...result.key,
              schemaTest.errorMessage ?? `${key} is not defined.`,
            ] : [schemaTest.errorMessage ?? `${key} is not defined.`],
          };
        }
        return result;
      }
      throw new Error(`key ${key} not found in schema.`);
    }, {} as SchemaAccumulator);
    if (result.error && result.error.includes(true)) {
      return {error: true, errorMessages: result.key};
    }
    return {error: false, errorMessages: []};
  } catch (error) {
    throw error;
  }
};

