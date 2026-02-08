import { HelpCircle, LogOut01, User01 } from "@untitledui/icons";
import { usePathname, useSearchParams } from "next/navigation";
import { Button as AriaButton } from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { Dropdown } from "@/components/base/dropdown/dropdown";
import { User } from "@/types";
import { getUserPublicFileUrl } from "@/utils/consts";
import { cx } from "@/utils/cx";
import { logOutApi } from "@/utils/login";
import { LayoutDashboard } from "lucide-react";

export const DropdownAvatar = ({ user, showName }: { user: User, showName?: boolean }) => {
    const params = usePathname()
        .split("/")
        .filter((item) => !!item);

    const type = params[0] ?? "toefl";
    const userAvatar = user.avatar ? getUserPublicFileUrl(user.id, user.avatar) : null;
    const userName = user.displayName?.trim() || user.firstAndLastName?.trim() || user.phoneNumber;
    const userEmail = user.email || "";
    const userInitials = getInitials(user.displayName) || getInitials(user.firstAndLastName);

    return (
        <Dropdown.Root>
            <AriaButton
                className={({ isPressed, isFocusVisible }) =>
                    cx(
                        "group relative inline-flex cursor-pointer rounded-full outline-focus-ring",
                        (isPressed || isFocusVisible) && "outline-2 outline-offset-2",
                    )
                }

            >
                <div className="flex items-center">
                    <Avatar alt={userName} src={userAvatar} initials={userInitials} size="md" />
                    {showName ?
                        <>
                            &nbsp;
                            {userName}
                        </>
                        : <></>
                    }
                </div>
            </AriaButton>

            <Dropdown.Popover placement="bottom start">
                <div className="flex gap-3 border-b border-secondary p-3">
                    <AvatarLabelGroup size="md" src={userAvatar} initials={userInitials} title={userName} subtitle={userEmail} />
                </div>
                <Dropdown.Menu>
                    <Dropdown.Section>
                        <Dropdown.Item icon={LayoutDashboard} href={`/${type}/dashboard`}>
                            داشبورد
                        </Dropdown.Item>
                        <Dropdown.Item icon={HelpCircle} href={`/about-us`}>
                            پشتیبانی
                        </Dropdown.Item>
                    </Dropdown.Section>
                    <Dropdown.Separator />
                    <Dropdown.Section>
                        <Dropdown.Item
                            className="**:text-destructive"
                            icon={LogOut01}
                            onClick={async (e) => {
                                e.preventDefault();
                                await logOutApi();
                                window.location.reload();
                            }}
                        >
                            خروج
                        </Dropdown.Item>
                    </Dropdown.Section>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown.Root>
    );
};

function getInitials(name?: string): string {
    if (!name) return "";

    const parts = name.trim().split(" ").filter(Boolean);

    if (parts.length === 0) return "";
    if (parts.length === 1) return parts[0][0].toUpperCase();

    // Take first and last words
    const first = parts[0][0].toUpperCase();
    const last = parts[parts.length - 1][0].toUpperCase();
    const ZWNJ = "\u200C"; // zero-width non-joiner
    return first + ZWNJ + last;
}
