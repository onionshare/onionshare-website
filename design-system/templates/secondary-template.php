<!-- SECONDARY TEMPLATE -->

<section class="secondary-template hidden">

<?php include "components/header/html/header.html" ?>

	<!-- SECONDARY - INTRO -->

	<main id="content">

		<?php include "components/intro/html/secondary-intro.html" ?>

		<!-- SECONDARY - BODY -->

		<?php include "components/tabs/html/tabs.html" ?>

		<!-- SECONDARY - PRIMARY LIST -->

		<section class="content primaryContent wrapper">
			<h2>Primary Content</h2>
			<?php include "components/content/html/item-standard.html" ?>
			<?php include "components/content/html/item-flip.html" ?>
			<?php include "components/content/html/item-mobile.html" ?>
			<?php include "components/content/html/item-featured.html" ?>
		</section>

		<?php include "components/content/html/squiggle.html" ?>

		<!-- SECONDARY - MORE LISTS -->

		<?php include "components/content/html/secondary.html" ?>
		<?php include "components/content/html/tertiary.html" ?>
		<?php include "components/content/html/basic.html" ?>

	</main>

	<?php include "components/footer/html/footer.html" ?>

</section>
