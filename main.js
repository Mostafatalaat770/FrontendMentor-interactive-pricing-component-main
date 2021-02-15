document.addEventListener("DOMContentLoaded", () => {
	const slider = document.getElementById("plans-slider");
	const billingSwitch = document.getElementById("billing-switch");
	const priceContainer = document.getElementById("amount");
	const pageviewsContainer = document.getElementById("pageviews");
	let price, isDiscounted;
	billingSwitch.addEventListener("change", ({ target }) => {
		isDiscounted = target.checked;
		const event = new Event("input");
		slider.dispatchEvent(event);
	});
	slider.addEventListener("input", ({ target }) => {
		let pageviews;
		switch (Number(target.value)) {
			case 0:
				price = 8.0;
				pageviews = "10k";
				break;
			case 25:
				price = 12.0;
				pageviews = "50k";
				break;
			case 50:
				price = 16.0;
				pageviews = "100k";
				break;
			case 75:
				price = 24.0;
				pageviews = "500k";
				break;
			case 100:
				price = 36.0;
				pageviews = "1m";
				break;
		}
		if (isDiscounted) {
			price *= 0.75;
		}
		slider.style.setProperty(
			"background",
			`linear-gradient(270deg, var(--lighter-grayish-blue) ${
				100 - target.value
			}%, var(--soft-cyan) ${100 - target.value}%)`
		);
		priceContainer.innerHTML = `$${price.toFixed(2)}`;
		pageviewsContainer.innerHTML = pageviews;
	});
});
