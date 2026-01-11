<?php
// Set response headers
header('Content-Type: application/json');

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get and sanitize form data
$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$email = isset($_POST['email']) ? trim(strip_tags($_POST['email'])) : '';
$phone = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : '';
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

// Validate required fields
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please provide a valid email address';
}

if (empty($message)) {
    $errors[] = 'Message is required';
}

// If there are validation errors, return them
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Prepare email
$to = 'rentalspcola@gmail.com';
$subject = 'New Contact Form Submission - Mi Casa Rentals';

$email_body = "New contact form submission:\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Phone: " . ($phone ?: 'Not provided') . "\n";
$email_body .= "Message:\n$message\n";

$headers = "From: noreply@micasarentals.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mail_sent = mail($to, $subject, $email_body, $headers);

if ($mail_sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your message! We will get back to you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your message. Please try calling or emailing us directly.'
    ]);
}
?>
