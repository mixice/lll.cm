<script>
	import Sider from './lib/Sider.svelte';
	import Contant from './lib/Contant.svelte';

	export let logo;
	export let consult;
	export let list;
	export let link;
	export let copy;
</script>

<main>
<Sider {logo} {list} />
<Contant {consult} {list} {link} {copy}/>
</main>

<style lang="less">
	main {padding-left: 220px;}
	@media (max-width: 640px) {
		main {padding-left: .6rem;}
	}
</style>