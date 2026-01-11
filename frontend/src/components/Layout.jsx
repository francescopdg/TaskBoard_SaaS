import {Outlet, Link} from "react-router-dom"
import {SignedIn, SignedOut, UserButton, OrganizationSwitcher, useOrganization} from "@clerk/clerk-react";

function Layout() {
    const {organization} = useOrganization()

    return <div className={"layout"}>
        <div className={"nav"}>
            <div className={"nav-container"}>
                <Link to={"/"} className={"nav-logo"}>
                    Task<span>Board</span>
                </Link>

                <div className={"nav-links"}>
                    <Link to={"/pricing"} className={"nav-link"}>
                        Pricing
                    </Link>
                    <SignedOut>
                    <Link to={"/sign-in"} className={"nav-link"}>
                        Sign In
                    </Link>
                    <Link to={"/sign-up"} className={"btn btn-primary"}>
                        Sign Up
                    </Link>
                    </SignedOut>
                    <SignedIn>
                        <OrganizationSwitcher
                            hidePersonal
                            afterCreateOrganizationUrl={"dashboard"}
                            afterSelectOrganizationUrl={"dashboard"}
                            createOrganizationMode={"modal"}
                            apperance={{
                                elements: {
                                    userPreviewMainIdentifierText__personalWorkspace: {color: "rgba(15, 23, 42, 0.92)"},
                                    organizationPreviewMainIdentifier__organizationSwitcherTrigger: {color: "rgba(15, 23, 42, 0.92)"}
                                }
                            }}
                        />
                        {organization &&
                        <Link to={"/dashboard"} className={"nav-link"}>
                            Dashboard
                        </Link>}
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </div>

        <main>
            <Outlet />
        </main>
    </div>
}

export default Layout
