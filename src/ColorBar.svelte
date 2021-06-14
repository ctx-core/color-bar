<script lang="ts">
import { createEventDispatcher } from 'svelte'
import { a_present_ } from '@ctx-core/array'
import { style_ } from '@ctx-core/html'
const dispatch = createEventDispatcher()
export let label_a:string[]
export let representation_a:any[]
export let title_a:string[]
export let value_a:any[]
export let weight_a:number[]
export let class_a:string[]
function li_style_(weight:number):string {
	return style_({
		'-webkit-box-flex': weight,
		flex: weight
	})
}
function onclick(event:Event, idx:number) {
	dispatch('click', {
		event,
		idx,
		label: label_a?.[idx],
		representation: representation_a?.[idx],
		title: title_a?.[idx],
		value: value_a?.[idx],
		weight: weight_a?.[idx],
	})
}
</script>

<div class="ColorBar {$$props.class||''}">
	<ul class="data">
		{#each title_a || [] as title,idx}
			<li
				class="{class_a[value_a?.[idx] || 0]}"
				title="{title || ''}"
				style="{li_style_(weight_a?.[idx])}"
				on:click="{event => onclick(event, idx)}"
			>
				{representation_a?.[idx]}
			</li>
		{/each}
	</ul>
	<ul
		class="labels"
		class:present="{a_present_(label_a)}"
	>
		{#each title_a || [] as title,idx}
			<li
				class="label"
				title="{title || ''}"
				style="{li_style_(weight_a?.[idx])}"
				on:click="{event => onclick(event, idx)}"
			>
				{label_a?.[idx]}
			</li>
		{/each}
	</ul>
</div>

<style type="text/scss">
:global(.ColorBar) {
	box-sizing: border-box;
	display: block;
	:global(*) {
		box-sizing: border-box;
	}
	:global(ul) {
		display: -webkit-box;
		display: flex;
		height: 1rem;
		width: 100%;
		margin: 0;
		padding: 0;
		overflow: hidden;
		-webkit-box-align: center;
		-webkit-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		justify-content: center;
		text-align: center;
		list-style: none;
		&.data {
			:global(li) {
				align-items: center;
				justify-content: center;
			}
		}
		&.labels {
			display: none;
			&.present {
				display: -webkit-box;
				display: flex;
			}
		}
		:global(li) {
			-webkit-box-flex: 1;
			flex: 1;
			height: 1rem;
			font-size: 1rem;
			line-height: 1rem;
			padding-top: 0.05em;
			width: auto;
			color: white;
			border-left: 2px solid #FFF;
			&.label {
				position: relative;
				color: #000000;
				font-weight: normal;
				> :global(div) {
					position: absolute;
					display: -webkit-box;
					display: flex;
					-webkit-box-align: center;
					-webkit-flex-align: center;
					align-items: center;
					-webkit-box-pack: center;
					-webkit-flex-pack: center;
					justify-content: center;
					width: 100%;
					text-align: center;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
	}
}
</style>
