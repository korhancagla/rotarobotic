<?php
declare(strict_types=1);

$requestedReturnPath = (string) ($_POST['return_path'] ?? '/');
$returnPath = in_array($requestedReturnPath, ['/', '/en/', '/iletisim/'], true) ? $requestedReturnPath : '/';

function redirectWithStatus(string $path, string $status): void
{
    $hash = $path === '/iletisim/' ? '' : '#contact';
    header('Location: ' . $path . '?contact=' . $status . $hash, true, 303);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    redirectWithStatus($returnPath, 'error');
}

if (trim((string) ($_POST['website'] ?? '')) !== '') {
    redirectWithStatus($returnPath, 'success');
}

$name = trim(strip_tags((string) ($_POST['name'] ?? '')));
$phone = trim(strip_tags((string) ($_POST['phone'] ?? '')));
$email = trim(strip_tags((string) ($_POST['email'] ?? '')));
$message = trim(strip_tags((string) ($_POST['message'] ?? '')));

$name = preg_replace('/[\r\n]+/u', ' ', $name) ?? '';
$phone = preg_replace('/[\r\n]+/u', ' ', $phone) ?? '';
$email = preg_replace('/[\r\n]+/u', ' ', $email) ?? '';

$validName = strlen($name) >= 2 && strlen($name) <= 100;
$validPhone = preg_match('/^[0-9\s()+\-.]{7,24}$/u', $phone) === 1;
$validEmail = filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
$validMessage = strlen($message) >= 10 && strlen($message) <= 1600;

if (!$validName || !$validPhone || !$validEmail || !$validMessage) {
    redirectWithStatus($returnPath, 'error');
}

$recipient = 'info@rotarobotik.com';
$subjectText = 'Rota Robotik web sitesi iletişim formu';
$subject = '=?UTF-8?B?' . base64_encode($subjectText) . '?=';
$body = "Yeni iletişim formu mesajı\n\n"
    . "Ad Soyad: {$name}\n"
    . "Telefon: {$phone}\n"
    . "E-posta: " . ($email !== '' ? $email : 'Belirtilmedi') . "\n\n"
    . "Mesaj:\n{$message}\n";

$headers = [
    'From: Rota Robotik Web <noreply@rotarobotik.com>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . PHP_VERSION,
];

$sent = mail($recipient, $subject, $body, implode("\r\n", $headers));
redirectWithStatus($returnPath, $sent ? 'success' : 'error');
