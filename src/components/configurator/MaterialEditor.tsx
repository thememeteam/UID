import type { MaterialAction } from "@/app/configurator/page";
import type { CarMaterials } from "@/globals";
import { type Dispatch, type Reducer, useReducer, useState } from "react";
import { Color, MeshStandardMaterial } from "three";

interface MaterialEditorProps {
	state: CarMaterials,
	dispatch: Dispatch<MaterialAction>;
}

const MaterialEditor: React.FC<MaterialEditorProps> = ({ state, dispatch }) => {
	const [bodyColor, setBodyColor] = useState(`#${state.body.color.getHexString()}`);
	const [metalness, setMetalness] = useState(0);

	const [rimColor, setRimColor] = useState(`#${state.rims.color.getHexString()}`);
	const [caliperColor, setCaliperColor] = useState(`#${state.calipers.color.getHexString()}`);

	const [interiorBaseColor, setInteriorBaseColor] = useState(`#${state.interiorBase.color.getHexString()}`);
	const [interiorAccentColor, setInteriorAccentColor] = useState(`#${state.interiorAccent.color.getHexString()}`);



	return (
		<div>
			<details>
				<summary>Body</summary>
				<div>
					<label>
						Base Color:
						<input
							type="color"
							value={bodyColor}
							onChange={(e) => {
								setBodyColor(e.target.value);
								dispatch({
									type: "body",
									key: "color",
									value: new Color(e.target.value),
								});
							}}
						/>
					</label>
					<br />
					<label>
						Metalness:
						<input
							type="range"
							min={0}
							max={100}
							value={metalness}
							onChange={(e) => {
								setMetalness(Number.parseInt(e.target.value));
								dispatch({
									type: "body",
									key: "metalness",
									value: Number.parseInt(e.target.value) / 100,
								})
							}}
						/>
						{metalness}%
					</label>
					<br />
					<label>
						<input
							type="checkbox"
							// checked={state.body.roughness === 0.5}
							onChange={(e) =>
								dispatch({
									type: "body",
									key: "roughness",
									value: e.target.checked ? 0.35 : 0,
								})
							}
						/>
						Matte Paint
					</label>
				</div>
			</details>
			<details>
				<summary>Wheels</summary>
				<div>
					<label>
						Rim Color:
						<input
							type="color"
							value={rimColor}
							onChange={(e) => {
								setRimColor(e.target.value);
								dispatch({
									type: "rims",
									key: "color",
									value: new Color(e.target.value),
								})
							}}
						/>
					</label>
					<br />
					<label>
						Brake Caliper Color:
						<input
							type="color"
							value={caliperColor}
							onChange={(e) => {
								setCaliperColor(e.target.value);
								dispatch({
									type: "calipers",
									key: "color",
									value: new Color(e.target.value),
								})
							}}
						/>
					</label>
				</div>
			</details>
			<details>
				<summary>Interior</summary>
				<div>
					<label>
						Base Color:
						<input
							type="color"
							value={interiorBaseColor}
							onChange={(e) => {
								setInteriorBaseColor(e.target.value);
								dispatch({
									type: "interiorBase",
									key: "color",
									value: new Color(e.target.value),
								})
							}}
						/>
					</label>
					<br />
					<label>
						Accent Color:
						<input
							type="color"
							value={interiorAccentColor}
							onChange={(e) => {
								setInteriorAccentColor(e.target.value);
								dispatch({
									type: "interiorAccent",
									key: "color",
									value: new Color(e.target.value),
								})
							}}
						/>
					</label>
				</div>
			</details>
		</div>
	);
};

export default MaterialEditor;
