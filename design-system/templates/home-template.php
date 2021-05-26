<!-- HOME TEMPLATE -->

<section class="home-template">

<?php include "components/header/html/header.html" ?>

	<!-- HOME - INTRO -->

	<main id="content">

		<?php include "components/intro/html/home-intro.html" ?>

		<!-- HOME - MISSION STATEMENT -->

		<?php include "components/statement/html/statement.html" ?>

		<!-- HOME - DESIGN RESOURCES -->

		<?php include "components/content/html/figma.html" ?>

		<!-- HOME - PRIMARY LIST -->

		<section class="content primaryContent wrapper">
			<h2>Primary Content</h2>
			<?php include "components/content/html/item-standard.html" ?>
			<?php include "components/content/html/item-flip.html" ?>
			<?php include "components/content/html/item-mobile.html" ?>
			<?php include "components/content/html/item-featured.html" ?>
		</section>

		<!-- HOME - EXAMPLES -->

		<?php include "components/content/html/example.html" ?>

		<!-- HOME - MORE LISTS -->

		<?php include "components/content/html/secondary.html" ?>
		<?php include "components/content/html/tertiary.html" ?>
		<?php include "components/content/html/basic.html" ?>

		<!-- HOME - ABOUT AND CONTACT -->

		<?php include "components/about/html/about.html" ?>
		<?php include "components/contact/html/contact.html" ?>

	</main>

	<?php include "components/footer/html/footer.html" ?>

</section>
