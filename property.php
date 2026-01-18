<?php
// property.php (legacy redirector)
$old = $_GET['slug'] ?? '';
$old = strtolower(trim($old));

// Map old slugs to new slugs
$map = [
  'rebecca-street'      => 'pensacola-rebecca-street-one-bedroom',
  'gadsden-community'   => 'pensacola-downtown-gated-three-bedroom',
  'gadsden-duplex'      => 'pensacola-downtown-three-bedroom',
  'yacht-harbor'        => 'pensacola-west-florida-hospital-two-bedroom',
  // add more here...
];

if ($old !== '' && isset($map[$old])) {
  $newSlug = $map[$old];
  $target = "https://www.micasa.rentals/listing.php?slug=" . rawurlencode($newSlug);
  header("Location: $target", true, 301);
  exit;
}

// If no mapping exists, redirect to homepage
header("Location: https://www.micasa.rentals/", true, 301);
exit;
