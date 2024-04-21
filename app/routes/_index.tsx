import { redirect, type MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
	return [
		{ title: "PARK Sobral" },
		{
			name: "description",
			content: "Aventure-se na Melhor Culinária de Sobral",
		},
	];
};

export const loader = () => {
	return redirect("https://parkchoppsobral.goomer.app", 301);
};

export default function Index() {
	return <div></div>;
}
