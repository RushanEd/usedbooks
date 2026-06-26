export default function Page() {
  return (
    <>
      <p>
        <strong>How to Request Account Deletion</strong>
        We are sorry to see you go. If you would like to permanently delete your
        account and all associated personal data, please follow the steps below:
        <strong>Option 1: In-App (Recommended)</strong>
      </p>
      <ol>
        <li>
          Open the app and navigate to <strong>Settings</strong>.
        </li>
        <li>
          Tap on <strong>Account &amp; Security</strong>.
        </li>
        <li>
          Scroll to the bottom and tap <strong>Delete Account</strong>.
        </li>
        <li>
          Review the confirmation prompt and tap <strong>Confirm</strong>.
        </li>
      </ol>
      <p>
        <strong>Option 2: Email Request</strong>
        If you are unable to access the app, you may request deletion by sending
        an email to <code>privacy@yourapp.com</code>.
      </p>
      <ul>
        <li>
          <strong>Subject:</strong> Account Deletion Request
        </li>
        <li>
          <strong>Body:</strong> Please include the email address associated
          with your account.
        </li>
      </ul>
      <p>
        <strong>What happens next?</strong>
      </p>
      <ul>
        <li>Once requested, your account will be deactivated immediately.</li>
        <li>
          Your data will be permanently purged from our servers within{" "}
          <strong>30 days</strong>.
        </li>
        <li>
          Please note that this action is{" "}
          <strong>permanent and cannot be undone</strong>. Once deleted, your
          account history, profile settings, and saved data will be
          unrecoverable.
        </li>
      </ul>
      <p>
        <em>
          Note: We may retain certain transaction data for a limited period as
          required by tax and financial reporting laws.
        </em>
      </p>
    </>
  )
}
