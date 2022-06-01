<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('onMount');
		const dimension = 104;
		const centre = dimension / 2;
		const distance = 40;
		const textSize = 10;
		// Temporarily disable second hand.
		const drawSecondHand = false;
		const clockSvg = document.getElementById('clock-svg');
		function drawNumbers(clockSvg: Element) {
			for (let i = 0; i < 12; i++) {
				const angle = (30 * i * Math.PI) / 180;
				const number = i === 0 ? 12 : i;
				const s = centre + Math.sin(angle) * distance;
				const c = centre + -Math.cos(angle) * distance;
				const element = document.createElementNS('http://www.w3.org/2000/svg', 'text');
				console.log();
				element.setAttribute('x', `${s - textSize / 2}`);
				element.setAttribute('y', `${c + textSize / 2}`);
				element.setAttribute('width', textSize.toString());
				element.setAttribute('height', textSize.toString());
				element.setAttribute('class', 'small');
				element.setAttribute('textanchor', 'middle');
				element.textContent = number.toString();
				clockSvg.appendChild(element);
			}
		}
		function drawHands(clockSvg: Element, drawSecondHand: boolean) {
			console.log('drawin hands');
			const now = new Date();
			const hours = now.getHours() + now.getMinutes() / 60;
			const minutes = now.getMinutes() + now.getSeconds() / 60;
			const seconds = now.getSeconds();
			const hourLength = 30;
			const minuteLength = 40;
			const secondLength = 45;

			function drawHand(
				clockSvg: Element,
				id: string,
				length: number,
				angle: number,
				colour: string,
				width: number
			) {
				console.log('drawin hand');
				const old = document.getElementById(id);
				if (old !== null) {
					old.remove();
				}
				const hand = document.createElementNS('http://www.w3.org/2000/svg', 'line');
				const endX = 52 + length * Math.sin((angle / 180) * Math.PI);
				const endY = 52 + length * -Math.cos((angle / 180) * Math.PI);
				hand.setAttribute('id', id);
				hand.setAttribute('x1', '52');
				hand.setAttribute('y1', '52');
				hand.setAttribute('x2', endX.toString());
				hand.setAttribute('y2', endY.toString());
				hand.setAttribute('stroke', colour);
				hand.setAttribute('stroke-width', width.toString());
				clockSvg.appendChild(hand);
			}

			drawHand(clockSvg, 'hourhand', hourLength, hours * 30, 'black', 2);
			drawHand(clockSvg, 'minutehand', minuteLength, minutes * 6, 'gray', 1.5);
			if (drawSecondHand) {
				drawHand(clockSvg, 'secondhand', secondLength, seconds * 6, 'red', 1);
			}
			const centre = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
			centre.setAttribute('cx', '52');
			centre.setAttribute('cy', '52');
			centre.setAttribute('r', '2');
			centre.setAttribute('stroke', 'black');
			centre.setAttribute('fill', 'black');
			clockSvg.appendChild(centre);
		}
		if (clockSvg != null) {
			drawNumbers(clockSvg);
			drawHands(clockSvg, drawSecondHand);
			setInterval(() => drawHands(clockSvg, drawSecondHand), 1000);
		}
	});
</script>

<h1 id="title">A clock for Joseph</h1>
<div id="clock">
	<svg id="clock-svg" viewBox="0 0 104 104" xmlns="http://www.w3.org/2000/svg">
		<circle cx="52" cy="52" r="50" fill="none" stroke-width="2" stroke="black" />
	</svg>
</div>

<style>
	#title {
		margin-left: auto;
		margin-right: auto;
	}
	#clock {
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
	}
</style>
