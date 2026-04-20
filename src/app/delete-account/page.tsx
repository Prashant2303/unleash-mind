import Navbar from "@/components/Navbar";

export default function DeleteAccount() {
    return <div>
        <Navbar />
        <div className="text-center p-4">
            <h2 className="text-3xl font-bold mb-4">Delete Account</h2>
            If you would like to fully delete your account and the information in it, you can write to us at <a className="text-blue-600 hover:text-blue-800 visited:text-purple-600" href="mailto:contact@unleashmind.net">contact@unleashmind.net</a>.
            We will use commercially reasonable efforts to remove your personal information from our services so long as we do not have any legal reason or obligation to retain the record.
            It may take up to 7 days for your information to be cleared from our servers.

            Please see our <a className="text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://spiritual-psychology.web.app/privacy-policy/">Privacy Policy</a> for our full data retention policy.
        </div>
    </div>
}