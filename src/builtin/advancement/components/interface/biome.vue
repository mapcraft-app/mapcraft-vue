<template>
	<div class="column q-gutter-sm">
		<biome v-model="data.biome" />
		<q-card bordered square flat class="q-pa-sm column align-center">
			<span class="text-center">{{ $capitalize($t('builtin.advancement.interface.common.block')) }}</span>
			<block v-model="data.block" />
		</q-card>
		<q-card bordered square flat class="q-pa-sm column align-center">
			<span class="text-center">{{ $capitalize($t('builtin.advancement.interface.biome.fluid')) }}</span>
			<fluid v-model="data.fluid" />
		</q-card>
		<dimension v-model="data.dimension" />
		<structure v-model="data.feature" :label="$capitalize($t('builtin.advancement.interface.biome.feature'))" />
		<q-toggle v-model="data.smokey" color="primary" :label="$capitalize($t('builtin.advancement.interface.biome.smokey'))" />
		<q-card bordered square flat class="q-pa-sm q-gutter-sm column align-center">
			<span class="text-center">{{ $capitalize($t('builtin.advancement.interface.biome.position')) }}</span>
			<number-range v-model="data.position.x" :label="$capitalize($t('builtin.advancement.interface.common.x'))"/>
			<number-range v-model="data.position.y" :label="$capitalize($t('builtin.advancement.interface.common.y'))"/>
			<number-range v-model="data.position.z" :label="$capitalize($t('builtin.advancement.interface.common.z'))"/>
		</q-card>
		<q-card bordered square flat class="q-pa-sm column align-center">
			<span class="text-center">{{ $capitalize($t('builtin.advancement.interface.biome.light')) }}</span>
			<div class="row justify-center q-pt-sm">
				<light v-model="data.light" />
			</div>
		</q-card>
	</div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, PropType, ref, watch } from 'vue';
import { biome as biomeInterface } from '../../model';

import block from './block.vue';
import fluid from './fluid.vue';
import light from './light.vue';
import biome from '../select/biome.vue';
import structure from '../select/structure.vue';
import dimension from '../select/dimension.vue';
import numberRange from '../type/numberRange.vue';

export default defineComponent({
	name: 'InterfaceBiome',
	components: {
		biome,
		block,
		fluid,
		light,
		structure,
		dimension,
		numberRange
	},
	props: {
		modelValue: {
			type: Object as PropType<biomeInterface | null>,
			required: false,
			default: {} as biomeInterface
		}
	},
	emits: ['update:modelValue'],
	setup (props, { emit }) {
		const data = ref<biomeInterface>({
			biome: props.modelValue?.biome ?? null,
			block: props.modelValue?.block ?? null,
			fluid: props.modelValue?.fluid ?? null,
			dimension: props.modelValue?.dimension ?? null,
			feature: props.modelValue?.feature ?? null,
			smokey: props.modelValue?.smokey ?? null,
			position: {
				x: props.modelValue?.position?.x ?? null,
				y: props.modelValue?.position?.y ?? null,
				z: props.modelValue?.position?.z ?? null
			},
			light: props.modelValue?.light ?? null
		} as biomeInterface);

		onBeforeMount(() => {
			watch(data, (after) => {
				if (after)
					emit('update:modelValue', after);
			}, { deep: true });
		});

		return {
			data
		};
	}
});
</script>
