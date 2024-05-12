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
					{/* <label>
						Rim Color:
						<input
							type="color"
							value={state.ri}
							onChange={(e) =>
								dispatchAndNotify({
									type: "wheels",
									key: "rimColor",
									value: e.target.value,
								})
							}
						/>
					</label> */}
					<br />
					<label>
						Brake Caliper Color:
						<input
							type="color"
							value={state.brakeCalipers.color.getHexString()}
							onChange={(e) =>
								dispatch({
									type: "calipers",
									key: "color",
									value: e.target.value,
								})
							}
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
							value={state.interiorBase.color.getHexString()}
							onChange={(e) =>
								dispatch({
									type: "interiorBase",
									key: "color",
									value: e.target.value,
								})
							}
						/>
					</label>
					<br />
					<label>
						Accent Color:
						<input
							type="color"
							value={state.interiorAccent.color.getHexString()}
							onChange={(e) =>
								dispatch({
									type: "interiorAccent",
									key: "color",
									value: e.target.value,
								})
							}
						/>
					</label>
				</div>
			</details>
		</div>
	);
};

export default MaterialEditor;
