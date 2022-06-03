<script>
	// Import global styles.
	import '../app.css';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css?family=Mukta+Mahee%7CRaleway%7CPoppins%7CQuicksand:wght@500"
		rel="stylesheet"
	/>
</svelte:head>

<div id="top">
	<div id="header">
		<a href="/"><div id="homelink"><img id="logo" src="/logo.png" alt="logo" />Will Rogers</div></a>
		<nav>
			<ul>
				<li><a href="/">home</a></li>
				<li><a href="/about">about</a></li>
				<li><a href="/links">links</a></li>
				<li class="header-nav-item">
					<a href="https://github.com/willrogers">
						<img class="header-nav-github" src="/GitHub-Mark-64px.png" alt="github" />
					</a>
				</li>
				<li class="header-nav-item">
					<a href="https://twitter.com/wrgrs">
						<img class="header-nav-twitter" src="/Twitter_Logo_Blue.png" alt="twitter" />
					</a>
				</li>
			</ul>
		</nav>
	</div>
</div>

<div id="main">
	<slot />
</div>

<style>
	#top {
		width: 100%;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
		padding: 0;
		margin: 0;
	}

	#top a {
		text-decoration: none;
	}

	#header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 800px;
		margin-left: auto;
		margin-right: auto;
	}
	#logo {
		height: 35px;
		width: 35px;
	}

	nav img {
		/* This avoids the images being vertically offset in the nav. */
		display: block;
	}

	nav ul {
		display: flex;
		align-items: center;
		font-size: 1.2em;
	}

	nav ul li {
		list-style: none;
		padding: 10px;
	}

	#main {
		width: 800px;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-flow: column;
	}
	#homelink {
		font-family: 'Raleway', sans-serif;
		font-size: 3em;
	}
	.header-nav-github {
		width: 25px;
		height: 25px;
	}
	.header-nav-twitter {
		width: 42px;
		height: 42px;
	}
</style>
