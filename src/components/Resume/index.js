import React from "react";
import * as C from "./style.js";
import ResumeItem from "../ResumeItem/index.js";

import {
    CiCirclePlus,
    CiCircleMinus,
    CiDollar
} from "react-icons/ci";

const Resume = ({ income, expense, total }) => {
    return (
        <C.Container>
            <ResumeItem title="Entradas" Icon={CiCirclePlus} value={income} />
            <ResumeItem title="Saídas" Icon={CiCircleMinus} value={expense} />
            <ResumeItem title="Total" Icon={CiDollar} value={total} />
        </C.Container>
    );
}

export default Resume;