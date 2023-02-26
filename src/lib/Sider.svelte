<script>
	export let logo;
	export let list;
</script>

<sider>
	<a href="/"><h1><i style="background-image: url({logo})"></i></h1></a>
	<fold>
		{#each list as { classfly, href, ico, link }}
			<tt><a class="smooth" href="#{href}"><i class="ico {ico}"></i><h5>{classfly}</h5></a></tt>
			<aside>
				{#each link as { connect, href }}
					<a class="smooth" href="#{href}">{connect}</a>
				{/each}
			</aside>
		{/each}
	</fold>
	<div class="btn-flex">
		<a href="//wpa.qq.com/msgrd?v=3&uin=544490&site=qq&menu=yes" class="btn" target="_blank"><i class="ico ico-qq"></i></a>
		<a href="mailto:mixice@mixice.com" class="btn" target="_blank"><i class="ico ico-mail"></i></a>
	</div>
</sider>

<style lang="less">
	sider {width: 220px;height: 100%;position: fixed;left: 0;top: 0;background: repeating-radial-gradient(circle at 110% 80%, transparent 0, var(--000-1) 3px 3px, transparent 5px 10px) var(--sapphire);flex-direction: column;display: flex;
		h1 {padding: 30px 0;color: transparent;
			i {width: 80px;height: 80px;display: block;margin: auto;}
			&:hover i {transform: rotateY(180deg);}
		}
		fold {color: white;height: 100%;flex: 1;overflow: auto;
			&::-webkit-scrollbar {width: 5px;}
			tt {border: 0;
				a {color: white;
					h5 {font-size: 14px;}
					&:hover {background-color: var(--000-1);
						i {transform: rotate(360deg);}
					}
				}
			}
			aside {padding: 5px 0;
				a {display: block;line-height: 40px;color: white;padding-left: 50px;}
			}
		}
		.btn-flex {margin: 10px 5px;
			a {margin: 0 5px;}
		}
	}

	@media (max-width: 640px) {
		sider {width: .6rem;
			h1 {padding: .2rem 0;
				i {width: .5rem;height: .5rem;}
			}
			fold {
				&::-webkit-scrollbar {width: 0;}
				tt h5,
				aside {display: none !important;}
			}
			.btn-flex {display: block;margin: 0;
				a {margin: 0;height: .6rem;border-radius: 0;}
			}
		}
	}
</style>