import { S } from 'fluent-json-schema';

export const HelloSchema = {
    body: S.object()
        .prop('hello', S
            .string()
            .required())
        .prop('helloArray', S
            .array()
            .items(
                S.string(),
            ).required()),
};
