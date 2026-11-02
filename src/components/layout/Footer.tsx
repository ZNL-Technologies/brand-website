import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { footerNav, connectCta, startCta } from "@/lib/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-accent border-t border-accent-foreground/10">
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/znl-wordmark.png"
                alt=""
                aria-hidden="true"
                width={446}
                height={240}
                className="h-9 w-auto shrink-0 znl-mark-adaptive"
              />
              <span className="sr-only">ZNL Technologies</span>
            </div>
            <p className="mt-4 max-w-sm text-[15px] leading-[1.65] text-accent-foreground/75">
              One team for the website, the cloud behind it, and the AI on
              top — with a written scope and evidence at every stage.
            </p>

            <div className="mt-6 flex flex-col items-start gap-3">
              <LinkButton href={startCta.href} variant="primary" className="px-5">
                {startCta.label}
              </LinkButton>
              <Link
                href={connectCta.href}
                className="text-[15px] font-medium text-accent-foreground underline decoration-accent-foreground/30 underline-offset-4 hover:text-brand-maroon"
              >
                {connectCta.label}
              </Link>
            </div>
          </div>

          <nav aria-label="Footer" className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {footerNav.map((group) => (
                <div key={group.heading}>
                  <p className="text-eyebrow text-accent-foreground/70">{group.heading}</p>
                  <ul className="mt-3 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-[14px] text-accent-foreground/85 transition-colors duration-200 hover:text-brand-maroon motion-reduce:transition-none"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <p className="mt-12 border-t border-accent-foreground/10 pt-6 text-[13px] text-accent-foreground/70">
          © {year} ZNL Technologies. Cloud architecture and delivery practices
          follow AWS and Microsoft standards; no partner-program affiliation
          is implied or claimed.
        </p>
      </Container>
    </footer>
  );
}
