import { SvelteComponent } from 'svelte'
export class ColorBar extends SvelteComponent<{
	label_a:string[]
	representation_a:any[]
	title_a:string[]
	value_a:any[]
	weight_a:number[]
	class_a:string[]
}, {
	click: {
		event:MouseEvent
		idx:number
		label:string
		representation:any
		title:string
		value:any
		weight:number
	}
}> {}
