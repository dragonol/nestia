import { INestiaConfig } from "@nestia/sdk";

export const NESTIA_CONFIG: INestiaConfig = {
    input: ["src/controllers"],
    output: "src/api",
    simulate: true,
    e2e: "src/test",
    swagger: {
        output: "swagger.json",
        security: {
            bearer: {
                type: "apiKey",
            },
        },
        decompose: true,
    },
};
export default NESTIA_CONFIG;
