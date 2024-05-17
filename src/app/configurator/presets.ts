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
    }
};
