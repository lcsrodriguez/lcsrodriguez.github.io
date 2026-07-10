<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
    import { redirect } from '@sveltejs/kit';


	const targetUrl = "https://lucasrodriguez.net/?s=o"; // ← Change this
	const waitTime = 10; // 2.5 seconds


	onMount(() => {
		// Hard redirect
		//window.location.replace(targetUrl);
 
		// Soft redirect
        setTimeout(() => window.location.replace(targetUrl), 2500);
	});

    /*
    onMount(() => {
		const timer = setTimeout(() => {
			window.location.href = targetUrl;
		}, waitTime);

		return () => clearTimeout(timer);
	});
    */

    /*
	onMount(() => {
		const timer = setTimeout(() => {
            throw redirect(303, targetUrl);
            
            // goto(...) is dedicated to redirect for internal routes
			//goto(targetUrl, { replaceState: true });
		}, waitTime);

		return () => clearTimeout(timer);
	});*/
</script>

<div class="wait-container">
	<h1>Please wait...</h1>
	<p>Redirecting in a moment to the portfolio</p>
	
    <p><a href="https://lucasrodriguez.net?s=o" tabindex="0">https://lucasrodriguez.net</a></p>
	<!-- Optional: nice spinner -->
	<!--<div class="spinner"></div>-->
    <div class="spinner"></div>
</div>

<style>
    *{
        font-family: system-ui,segoe ui,Roboto,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji;
    }

	.wait-container {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: #f8f9fa;
		color: #333;
	}

	.spinner {
		margin-top: 2rem;
		width: 50px;
		height: 50px;
		border: 5px solid #f3f3f3;
		border-top: 5px solid black; /* #3498db; */
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
</style>