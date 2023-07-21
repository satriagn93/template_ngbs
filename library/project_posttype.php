<?php

// =====================================================================================================
// Start Add Meta Box - Custom Field - NEWS EVENT
add_action("admin_init", "registerlist_add_meta");
function registerlist_add_meta(){
	add_meta_box("registerlist-meta", "Register List Detail", "registerlist_meta_options", "registerlist", "normal", "high");
}

function registerlist_meta_options(){
	global $post;
	if( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ){
		return $post_id;
	}
	
	$custom = get_post_custom($post->ID);

	$regis_id = $custom["regis_id"][0];
	$regis_status = $custom["regis_status"][0];
	$regis_postdate = $custom["regis_postdate"][0];
	$regis_name = $custom["regis_name"][0];
	$regis_phone = $custom["regis_phone"][0];
	$regis_email = $custom["regis_email"][0];
	$regis_location = $custom["regis_location"][0];
	$regis_childname = $custom["regis_childname"][0];
	$regis_childage = $custom["regis_childage"][0];
	$regis_program = $custom["regis_program"][0];
	$regis_message = $custom["regis_message"][0];

?>

<style type="text/css">
<?php include('adm.css'); 
?>

</style>
<div class="jaringan-extras meta-box-wrapper">

<?php 
	date_default_timezone_set("Asia/Jakarta");
	$now = date('Y-m-d');
	$ido = $post->ID;
	$publish_date = get_the_date('Y-m-d', $ido);
?>

	<div>
		<label>Register Code</label>
		<?php if(!isset($regis_id)){$regis_id = '';} ?>
		<input type="text" name="regis_id" value="<?php echo $regis_id; ?>" placeholder="Register Code" readonly>
	</div>



	<?php /*
	<div>
	<label>Project Status</label>
	<select name="regis_status">
	<?php
	$pf_type2= array(
			"New"=>"New", 
			"Followed"=>"Followed", 
	);
	foreach( $pf_type2 as $key=>$item ){
	$attr= ( $key == $regis_status ) ? $attr= " selected=\"\"" : "";
	?>
	<option value="<?php echo $key; ?>" <?php echo $attr; ?> > <?php echo strtoupper($item); ?></option>
	<?php
	}
	?>
	</select>
	</div>
	*/?>

	<div>
		<label>Project Status</label>
		<?php if(!isset($regis_status)){$regis_status = '';} ?>
		<input type="text" name="regis_status" value="<?php echo $regis_status; ?>" placeholder="Status" readonly>
	</div>

	<div>
		<label>Register Date</label>
		<?php if(!isset($regis_date)){$regis_date = '';} ?>
		<input type="text" name="regis_date" value="<?php echo $regis_date; ?>" placeholder="Register Date" readonly>
	</div>

	<div>
		<label>User Name</label>
		<?php if(!isset($regis_name)){$regis_name = '';} ?>
		<input type="text" name="regis_name" value="<?php echo $regis_name; ?>" placeholder="User Name" readonly>
	</div>

	<div>
		<label>User Phone</label>
		<?php if(!isset($regis_phone)){$regis_phone = '';} ?>
		<input type="text" name="regis_phone" value="<?php echo $regis_phone; ?>" placeholder="User Phone" readonly>
	</div>

	<div>
		<label>User Email</label>
		<?php if(!isset($regis_email)){$regis_email = '';} ?>
		<input type="text" name="regis_email" value="<?php echo $regis_email; ?>" placeholder="User Email" readonly>
	</div>

	<div>
		<label>User Location</label>
		<?php if(!isset($regis_location)){$regis_location = '';} ?>
		<input type="text" name="regis_location" value="<?php echo $regis_location; ?>" placeholder="User Location" readonly>
	</div>

	<div>
		<label>Child Name</label>
		<?php if(!isset($regis_child)){$regis_child = '';} ?>
		<input type="text" name="regis_child" value="<?php echo $regis_child; ?>" placeholder="Child Name" readonly>
	</div>

	<div>
		<label>Child Age</label>
		<?php if(!isset($regis_childage)){$regis_childage = '';} ?>
		<input type="text" name="regis_childage" value="<?php echo $regis_childage; ?>" placeholder="Child Age" readonly>
	</div>

	<div>
		<label>Child Age</label>
		<?php if(!isset($regis_program)){$regis_program = '';} ?>
		<input type="text" name="regis_program" value="<?php echo $regis_program; ?>" placeholder="Child Age" readonly>
	</div>

	<div>
		<label>Message</label>
		<textarea name="regis_message" readonly><?php echo $regis_message; ?></textarea>
	</div>

</div>
<?php
}
// End Add Meta Box - Custom Field

// =====================================================================================================
// Start Save Post
add_action('save_post', 'registerlist_save_extras');
function registerlist_save_extras(){
	global $post;
	
	if( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ){
		return $post_id;
	}else{
		
$allvalue = array(		
					"regis_id" => $_POST['regis_id'],
					"regis_status" => $_POST['regis_status'],
					"regis_postdate" => $_POST['regis_postdate'],
					"regis_name" => $_POST['regis_name'],
					"regis_phone" => $_POST['regis_phone'],
					"regis_email" => $_POST['regis_email'],
					"regis_location" => $_POST['regis_location'],
					"regis_childname" => $_POST['regis_childname'],
					"regis_childage" => $_POST['regis_childage'],
					"regis_program" => $_POST['regis_program'],
					"regis_message" => $_POST['regis_message'],

					);		
		foreach ($allvalue as $key => $value) { // Cycle through the $events_meta array!
			if( $post->post_type == 'revision' ) return; // Don't store custom data twice
			//$value = implode(',', (array)$value); // If $value is an array, make it a CSV (unlikely)
			if(get_post_meta($post->ID, $key, FALSE)) { // If the custom field already has a value
				update_post_meta($post->ID, $key, $value);
			} else { // If the custom field doesn't have a value
				add_post_meta($post->ID, $key, $value);
			}
			if(!$value) delete_post_meta($post->ID, $key); // Delete if blank
		}
	}
}
// End Save Post

?>