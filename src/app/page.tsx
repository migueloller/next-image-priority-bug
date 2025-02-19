import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">
          PPR <span className="font-mono whitespace-pre">`next/image`</span> issues with{' '}
          <span className="font-mono whitespace-pre">`priority`</span>
        </h1>

        <p>
          This reproduction app has four different pages that show how{' '}
          <span className="font-mono whitespace-pre">`next/image`</span> behaves differently when
          using PPR and <span className="font-mono whitespace-pre">`priority`</span> depending on
          whether the <span className="font-mono whitespace-pre">`sizes`</span> prop is provided.
        </p>

        <hr />

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Example 1: PPR with sizes</h2>
          <p>
            In this example PPR is enabled and the{' '}
            <span className="font-mono whitespace-pre">`sizes`</span> prop is provided.
          </p>
          <p>
            The behavior is such that{' '}
            <strong className="font-bold">
              the first image is preloaded using JS and the rest of the images are preloaded
              properly
            </strong>{' '}
            for both production and development builds.
          </p>
          <Link className="underline" href="/ppr-with-sizes">
            View example
          </Link>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Example 2: PPR without sizes</h2>
          <p>
            In this example PPR is enabled but the{' '}
            <span className="font-mono whitespace-pre">`sizes`</span> prop is not provided.
          </p>
          <p>
            The behavior is such that{' '}
            <strong className="font-bold">all images are preloaded using JS</strong> for both
            production and development builds.
          </p>
          <Link className="underline" href="/ppr-without-sizes">
            View example
          </Link>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Example 3: No PPR, without sizes</h2>
          <p>
            In this example PPR is disabled and the{' '}
            <span className="font-mono whitespace-pre">`sizes`</span> prop is provided.
          </p>
          <p>
            The behavior is such that{' '}
            <strong className="font-bold">all images are preloaded properly</strong> by including
            the relevant <span>`&lt;link rel=&quot;preload&quot;&gt;`</span> tags at the top of the
            `&lt;head&gt;` in <strong className="font-bold">production builds only</strong>.
            Development builds insert the preload tags using JavaScript.
          </p>
          <Link className="underline" href="/no-ppr-without-sizes">
            View example
          </Link>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Example 4: No PPR, with sizes</h2>
          <p>
            In this example PPR is disabled and the{' '}
            <span className="font-mono whitespace-pre">`sizes`</span> prop is not provided.
          </p>
          <p>This example behaves exactly like Example 3.</p>
          <Link className="underline" href="/no-ppr-with-sizes">
            View example
          </Link>
        </section>

        <hr />

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Additional Notes</h2>
          <p>
            Notice that when preloading happens with JS, the 100px{' '}
            <span className="font-mono">`sizes`</span> prop doesn&apos;t have an impact and the
            image is the maximum size..
          </p>
          <p>
            In development builds (with Turbopack), but not production builds, the first request
            seems to preload images properly. This does not seem to happen in development builds
            without Turbopack.
          </p>
        </section>
      </main>
    </div>
  )
}
