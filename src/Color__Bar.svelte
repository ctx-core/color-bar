<script>
import { createEventDispatcher } from 'svelte'
import { andand } from '@ctx-core/function'
import { a_present_ } from '@ctx-core/array'
import { style_ } from '@ctx-core/html'
const dispatch = createEventDispatcher()
export let label_a
export let representation_a
export let title_a
export let value_a
export let weight_a
export let class_a
export let compressor_a = []
function li_style_(weight) {
	return style_({
		'-webkit-box-flex': weight,
		flex: weight
	})
}
function __click(event, idx) {
	dispatch('click', {
		event,
		idx,
		label: label_a && label_a[idx],
		representation: representation_a && representation_a[idx],
		title: title_a && title_a[idx],
		value: value_a && value_a[idx],
		weight: weight_a && weight_a[idx],
	})
}
</script>

<div class="Color__Bar {$$props.class||''}">
	<ul class="data">
		{#each title_a||[] as title,idx}
			<li
				class="{class_a[andand(value_a, idx) || 0]}"
				title="{title || ''}"
				style="{li_style_(andand(weight_a, idx))}"
				on:click="{event => __click(event, idx)}"
			>
				{andand(representation_a, idx)}
			</li>
		{/each}
	</ul>
	<ul
		class="labels"
		class:present="{a_present_(label_a)}"
	>
		{#each title_a||[] as title,idx}
			<li
				class="label"
				title="{title || ''}"
				style="{li_style_(andand(weight_a, idx))}"
				on:click="{event => __click(event, idx)}"
			>
				{andand(label_a, idx)}
			</li>
		{/each}
	</ul>
</div>

<style type="text/scss">
:global(.Color__Bar) {
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
