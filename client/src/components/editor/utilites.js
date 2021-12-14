import {renderHexJSON, getGridForHexJSON} from "d3-hexjson";

const makeWorkingGrid = (width, height) => {
    const hex = {
        "layout":"odd-r",
        "hexes": {
            "Q0R0":{"q":0,"r":0},
            "Q0R1":{"q":width,"r":height},
        }
    }
    const grid = getGridForHexJSON(hex);
    const output = renderHexJSON(grid, 800, 800);

    return output;
}

export {makeWorkingGrid};