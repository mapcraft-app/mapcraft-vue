<template>
	<q-list bordered class="q-mt-sm">
		<q-expansion-item
			expand-separator
			icon="person"
			:label="$capitalize($t('builtin.advancement.interface.entityPlayer.player'))"
			class="q-ma-xs"
		>
			<interface-entity v-model="data.player" :is-player="true" />
		</q-expansion-item>
		<q-expansion-item
			expand-separator
			icon="category"
			:label="$capitalize($t('builtin.advancement.select.entity'))"
			class="q-ma-xs"
		>
			<interface-entity v-model="data.entity" :is-player="true" />
		</q-expansion-item>
		<q-expansion-item
			expand-separator
			icon="air"
			:label="$capitalize($t('builtin.advancement.tab.killingBlow'))"
			class="q-ma-xs"
		>
			<div class="column full-width items-center q-pb-sm">
				<span class="text-h6">{{ $capitalize($t('builtin.advancement.tab.tags.title')) }}</span>
				<type-tags v-model="data.killing_blow.tags" />
			</div>
			<q-separator />
			<q-list bordered class="q-mt-sm">
				<q-expansion-item
					expand-separator
					icon="person"
					:label="$capitalize($t('builtin.advancement.interface.type.directEntity'))"
					class="q-ma-xs"
				>
					<interface-entity v-model="data.killing_blow.direct_entity" />
				</q-expansion-item>
				<q-expansion-item
					expand-separator
					icon="category"
					:label="$capitalize($t('builtin.advancement.interface.type.sourceEntity'))"
					class="q-ma-xs"
				>
					<interface-entity v-model="data.killing_blow.source_entity" />
				</q-expansion-item>
			</q-list>
		</q-expansion-item>
	</q-list>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, PropType, ref, watch } from 'vue';
import interfaceEntity from '../../interface/entityPlayer.vue';
import typeTags from '../../type/tags.vue';
import type { kill_mob_near_sculk_catalyst } from '../../../interfaces/1.20';

export default defineComponent({
	name: 'TabKillMobNearSculkCatalyst',
	components: {
		interfaceEntity,
		typeTags
	},
	props: {
		modelValue: {
			type: Object as PropType<kill_mob_near_sculk_catalyst>,
			required: true
		}
	},
	emits: ['update:modelValue'],
	setup (props, { emit }) {
		const data = ref<kill_mob_near_sculk_catalyst>({
			player: props.modelValue.player ?? null,
			entity: props.modelValue.entity ?? null,
			killing_blow: {
				tags: props.modelValue.killing_blow?.tags ?? [],
				direct_entity: props.modelValue.killing_blow?.direct_entity ?? null,
				source_entity: props.modelValue.killing_blow?.source_entity ?? null
			}
		} as kill_mob_near_sculk_catalyst);

		onBeforeMount(() => {
			watch(data, (val) => emit('update:modelValue', val), { deep: true });
		});

		return {
			data
		};
	}
});
</script>