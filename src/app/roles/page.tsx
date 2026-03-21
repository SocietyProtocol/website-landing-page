import type { Metadata } from "next";
import { getAllRoles } from "@/lib/mdx";

export const metadata: Metadata = { title: "Roles" };

const CAREERS_EMAIL = "careers@societyprotocol.io";

export default function Roles() {
  const roles = getAllRoles();

  return (
    <div className="min-h-screen bg-repeat-y bg-top bg-[length:100%_auto]" style={{ backgroundImage: "url(/images/group-131-bg.png)" }}>
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-8 pt-36 pb-24">
        <span className="font-mono text-[18px] tracking-widest text-[#7A7A7A] mb-10 block">
          / Organization
        </span>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="font-display text-5xl md:text-[66px] font-normal leading-[1]">
              Roles
            </h1>
            <p className="font-body text-[20px] text-[#7A7A7A] leading-[119%] max-w-2xl mt-6">
              We are seeking <em className="text-white not-italic">mission-aligned</em> contributors
              for some early roles to help us bring Society Protocol to life.
              Reach out at{" "}
              <a
                href={`mailto:${CAREERS_EMAIL}`}
                className="text-white underline hover:text-[#ADADAD] transition-colors"
              >
                {CAREERS_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Role Cards */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">
        <div className="rounded-[40px] bg-[#10141A] border border-[#6B6B6B] p-8 md:p-12">
          {roles.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-12">
              {roles.map((role) => (
                <div
                  key={role.slug}
                  className="flex flex-col rounded-[38px] bg-[#2c3442] border border-dashed border-[#6B6B6B] p-8 md:p-10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {role.emoji && <span className="text-3xl">{role.emoji}</span>}
                    <span className="inline-block rounded-full bg-[#1a1f2e] border border-[#6B6B6B] px-4 py-1 font-mono text-[14px] text-[#ADADAD]">
                      {role.commitment}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-[32px] font-normal leading-tight mb-6">
                    {role.title}
                  </h3>

                  <div className="mb-6">
                    <h4 className="font-mono text-[14px] tracking-widest text-[#7A7A7A] mb-3">
                      RESPONSIBILITIES
                    </h4>
                    <div className="font-body text-[18px] text-[#ADADAD] leading-[160%] whitespace-pre-line">
                      {role.responsibilities}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-mono text-[14px] tracking-widest text-[#7A7A7A] mb-3">
                      REQUIREMENTS
                    </h4>
                    <div className="font-body text-[18px] text-[#ADADAD] leading-[160%] whitespace-pre-line">
                      {role.requirements}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <p className="font-body text-[20px] text-[#7A7A7A]">
              No open roles at the moment. Check back soon.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
