import { redirect } from "next/dist/server/api-utils";
import { Color, DoubleSide } from "three";
import { metalness, roughness } from "three/examples/jsm/nodes/Nodes.js";

const ACCENT = 0xf77315;

export const presets = {
    default: {
        body: {
            color: new Color(0x2f2f2f),
            roughness: 0,
            metalness: 0
        },
        rims: {
            color: new Color("black")
        },
        calipers: {
            color: new Color(ACCENT)
        },
        interiorBase: {
            color: new Color("black")
        },
        interiorAccent: {
            color: new Color(ACCENT)
        }
    },
    red: {
        body: {
            color: new Color(0xc22424),
            roughness: 0,
            metalness: 0.33
        },
        rims: {
            color: new Color(0x000000)
        },
        calipers: {
            color: new Color(0x000000)
        },
        interiorBase: {
            color: new Color(0x000000)
        },
        interiorAccent: {
            color: new Color(0xdadada)
        }
    },
    white: {
        body: {
            color: new Color(0xdadada),
            roughness: 0,
            metalness: 0
        },
        rims: {
            color: new Color('black')
        },
        calipers: {
            color: new Color(ACCENT)
        },
        interiorBase: {
            color: new Color("white")
        },
        interiorAccent: {
            color: new Color(ACCENT)
        }
    },
    m5cs: {
        body: {
            color: new Color(0x002901),
            roughness: 0.35,
            metalness: 0
        },
        rims: {
            color: new Color(0x4f4308)
        },
        calipers: {
            color: new Color('black')
        },
        interiorBase: {
            color: new Color("black")
        },
        interiorAccent: {
            color: new Color('white')
        }
    }, 
    blue: {
        body: {
            color: new Color(0x0fadcc),
            roughness: 0,
            metalness: 0.25
        },
        rims: {
            color: new Color(0x8f8f8f)
        },
        calipers: {
            color: new Color(0x0f3686)
        },
        interiorBase: {
            color: new Color("white")
        },
        interiorAccent: {
            color: new Color(0x0f3686)
        }
    },
    pumpkin: {
        body: {
            color: new Color(0xa55c18),
            roughness: 0,
            metalness: 0.20
        },
        rims: {
            color: new Color(0x4f4f4f)
        },
        calipers: {
            color: new Color(0xa55c18)
        },
        interiorBase: {
            color: new Color(0x4f4f4f)
        },
        interiorAccent: {
            color: new Color(0x4f4f4f)
        }
    },
    galaxy: {
        body: {
            color: new Color(0x5400a8),
            roughness: 0,
            metalness: 0.8
        },
        rims: {
            color: new Color('black')
        },
        calipers: {
            color: new Color(0xb800a8)
        },
        interiorBase: {
            color: new Color(0x4e195d)
        },
        interiorAccent: {
            color: new Color(0xb800a8)
        }
    }
};
