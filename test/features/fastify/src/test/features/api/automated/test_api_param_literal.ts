import typia, { Primitive } from "typia";

import api from "./../../../../api";

export const test_api_param_literal = async (
    connection: api.IConnection
): Promise<void> => {
    const output: Primitive<"A" | "B" | "C"> = 
        await api.functional.param.literal(
            connection,
            typia.random<Primitive<"A" | "B" | "C">>(),
        );
    typia.assert(output);
};