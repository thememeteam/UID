import { Color, DoubleSide } from "three";
import { roughness } from "three/examples/jsm/nodes/Nodes.js";

export const presets = {
    default: {
        body: {
            color: new Color(0x2f2f2f),
            roughness: 0,
        },
        rims: {
            color: new Color("black"),
            roughness: 0.2,
            metalness: 0,
            side: DoubleSide,
        },
        calipers: {
            color: new Color(0xf77315),
            roughness: 0.3,
        },
        interiorBase: {
            color: new Color("black"),
            roughness: 0.5,
        },
        interiorAccent: {
            color: new Color(0xf77315),
            roughness: 1,
        },
    },
    m5cs: {
        body: {
            color: new Color(0x002901),
            roughness: 0.35,
        },
        rims: {
            color: new Color(0x4f4308),
            roughness: 0.2,
            metalness: 0.5,
            side: DoubleSide,
        },
        calipers: {
            color: new Color('black'),
            roughness: 0.3,
        },
        interiorBase: {
            color: new Color("black"),
            roughness: 0.5,
        },
        interiorAccent: {
            color: new Color('white'),
            roughness: 1,
        },
    }
};
