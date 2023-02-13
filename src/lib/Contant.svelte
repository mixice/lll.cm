<script>
	export let list;
	export let consult;
	export let link;
	export let copy;
</script>

<contant>
	<div class="consult">
		{#each consult as { type, descript, ico }}
			<li class="{type}"><i class="ico {ico}"></i><span>{descript}</span><o class="checkbox-done active"></o></li>
		{/each}
	</div>
	{#each list as { classfly, href, ico, link }}
		<h3 id="{href}"><i class="ico {ico}"></i>{classfly}</h3>
		{#each link as { connect, href, web } }
			<h5 id="{href}">{connect}</h5>
			<div class="list">
				{#each web as { site, href, pay, vpn, adult, info }}
					<li><a href="http://{href}?link=lll.cm" target="_blank">
						<u>
							<i data-pay="{pay}" class="ico ico-circular-star"></i>
							<i data-vpn="{vpn}" class="ico ico-earth"></i>
							<i data-adult="{adult}" class="ico ico-circular-disable"></i>
						</u>
						<h6>{site}</h6><span>{href}</span>
						<em class="full absolute-top-left center">{info}</em>
					</a></li>
				{/each}
			</div>
		{/each}
	{/each}
	<div class="link">
		<h5>链接</h5>
		<ul>
			{#each link as { site, href, info }}
				<li><a href="http://{href}?link=lll.cm" title="{info}" target="_blank">{site}</a></li>
			{/each}
		</ul>
	</div>
	<div class="foot">{@html copy}</div>
	<div class="anew btn"></div>
</contant>

<style lang="less">
	.ico-circular-star {color: var(--orange);}
	.ico-circular-disable {color: var(--red);}
	.ico-earth {color: var(--green);}
	contant {display: block;width: 100%;padding: 20px;box-sizing: border-box;background-color: var(--f7);
		h3 {border-bottom-width: 1px;padding: 20px 0;margin: 10px;
			i {font-size: 28px;margin-right: 10px;}
		}
		h5 {padding: 10px 0;margin: 10px;}
	}
	.consult {display: flex;align-items: center;justify-content: center;background-color: var(--eee);padding: 10px;
		li {display: flex;align-items: center;justify-content: center;padding: 20px;transition-duration: 0s;cursor: pointer;
			i,o {display: block;margin: auto;}
			span {padding: 0 10px;}
			o {color: var(--ccc);}
			&:hover o {color: var(--color);}
		}
	}
	.list {
		li {padding: 10px;float: left;width: 12.5%;border: 0;
			a {display: block;background-color: var(--f7);padding: 10px;border-radius: 5px;box-shadow: 5px 5px 10px var(--eee),-5px -5px 10px white;position: relative;overflow: hidden;
				u {position: absolute;top: 0;right: 0;padding: 5px;text-decoration: none;
					i {font-size: 20px;display: none;
						&[data-pay="ture"],
						&[data-adult="ture"],
						&[data-vpn="ture"] {display: inline;}
					}
				}
				h6,span {white-space: nowrap;overflow: hidden;text-overflow: ellipsis;line-height: 25px;}
				span {opacity: .3;display: block;}
				em {background-color: var(--orange);opacity: 0;word-break: break-all;text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;padding: 0 20px;}
				&:hover {box-shadow: inset 5px 5px 10px var(--eee),inset -5px -5px 10px white;
					em {opacity: 1;transition-delay: 1s;}
				}
			}
		}
		* {transition-duration: 0s !important;}
	}
	.link {display: flex;align-items: center;padding: 20px 0;border-width: 1px 0 1px 0;margin-top: 30px;;
		h5 {width: 100px;}
		ul {
			li {padding: 2px;display: inline-block;
				a {line-height: 40px;padding: 0 30px;background-color: var(--eee);display: block;border-radius: 100px;
					&:hover {background-color: var(--orange);}
				}
			}
		}
	}
	.foot {text-align: center;padding-top: 20px;text-transform: uppercase;}

	@media (max-width: 2200px) {.list li {width: 14.2%;}}
	@media (max-width: 1700px) {.list li {width: 20%;}}
	@media (max-width: 1300px) {.list li {width: 25%;}}
	@media (max-width: 1000px) {.list li {width: 33.3%;}}
	@media (max-width: 800px) {.list li {width: 50%;}}
	@media (max-width: 640px) {
		contant {padding: .1rem;
			h3 {padding: .2rem 0;margin: .1rem;
				i {font-size: .3rem;margin-right: .1rem;}
			}
			h5 {padding: .1rem 0;margin: .1rem;}
		}
		.consult {padding: .1rem;
			li {display: block;padding: .2rem;
				i {font-size: .48rem;}
				span {padding: .1rem 0;display: block;}
			}
		}
		.list li {padding: .1rem;
			a {padding: .1rem;border-radius: .1rem;box-shadow: .05rem .05rem .1rem var(--eee),-.05rem -.05rem .1rem white;
				u {padding: .05rem;
					i {font-size: .24rem;}
				}
				h6,span {line-height: .3rem;}
				em {padding: 0 .2rem;}
				&:hover {box-shadow: inset .05rem .05rem .1rem var(--eee),inset -.05rem -.05rem .1rem white;}
			}
		}
		.link {padding: .2rem 0;margin-top: .3rem;;
			h5 {width: 1rem;}
			ul li a {line-height: .5rem;padding: 0 .3rem;}
		}
	}
</style>