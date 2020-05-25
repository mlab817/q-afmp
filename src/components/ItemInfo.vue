<template functional>
	<q-item>
		<q-item-section class="col-4">{{ props.label }}</q-item-section>
		<q-item-section class="col-8">{{ typeof props.value === 'number' ? props.value.toLocaleString() : props.value }}</q-item-section>
	</q-item>
</template>