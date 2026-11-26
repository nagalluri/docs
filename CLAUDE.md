# Daydream docs

Mintlify site for Daydream, a desktop AI video editor for Mac and Windows. Preview with `mint dev`, check links with `mint broken-links`, check style with `node scripts/check-style.mjs`.

## Who reads this

Short-form creators, mostly from Instagram, editing on their own. Most are not professional editors. They arrive with a goal ("make this a Reel", "cut the silences"), not a feature name.

## Words we use

- "the AI" for the thing that edits. Not "agent", "assistant" or "AI Editor".
- "Claude" and "ChatGPT" for the providers. "Claude Code" and "Codex" appear only on `ai/connect-other-ai-tools`, in one line on `connect-claude-chatgpt`, and inside exact quotes of error messages.
- UI names exactly as the app shows them, in bold: **Assets**, **Transcript**, **Properties**, **Color**, **Memory**, **Agents**, **Export**.
- Import categories by their exact labels, **Voiceover / Talking Head** and **Footage / Images / Music**, and say what each does: the first gets transcribed, the second gets watched so the AI can find shots.
- B-roll (capital B). Captions, not subtitles, except once where people search "subtitles".

## Page types

Every page is one of: tutorial (`first-video` only), how-to (most pages), reference (`help/plans-and-limits`, `help/keyboard-shortcuts`), or troubleshooting. Don't mix. Option lists go in tables, not prose.

Task pages follow the same shape: answer in the first sentence, 2 to 3 example prompts, then how to do it by hand, then limits, then related pages.

## Frontmatter

Every page has `title` (the search title, how people ask, 50 to 60 characters where possible), `sidebarTitle` (short, the sidebar label) and `description` (130 to 160 characters, active voice, names Claude and ChatGPT where it fits).

## Voice

Model it on Nag's blog posts (daydreamvideo.com/blog). Answer first. Contractions. Casual where it's natural, concrete always: real prompts in quotes, real menu paths. Say why, then what to do. Admit limits plainly. "You" for the reader, "we" only for things we built or tested.

Never:
- em dashes or en dashes as punctuation, or " - " standing in for one
- "not just X, but Y", "it's not X, it's Y"
- "Here's the thing:", "The best part?", "The result?"
- seamless, effortless, powerful, robust, leverage, unlock, elevate, streamline, supercharge, harness, game-changer, cutting-edge, delve, dive in, simply, "it's worth noting", "in order to", "please note"
- "In this guide, we'll...", "Let's...", "Whether you're a...", "In summary", "Happy editing!"
- reflexive lists of three, emoji, bold labels on every bullet, a summary sentence at the end of every section

## SEO and answer engines

- First sentence of the page and of each H2 answers the question directly.
- H2s as the questions people ask, where natural. Sentence case.
- Specific numbers (limits, ranges, plan caps) instead of "some" or "limited".
- Every video or image gets alt text and a one-line caption, because answer engines can't watch video.
- Name Daydream in the opening paragraph.
- End task pages with a "Related pages" list using descriptive link text.

## Visuals

Visuals come in a separate PR. Mark where each goes with an MDX comment: `{/* Visual: what it shows */}`. Add one only where the reader needs to see something: what a result looks like, where a control is, or how motion or sound feels.

## Facts

Check every claim against the app's code (repo `videoscript`) before writing it. Don't document hidden or unreleased features. Known gaps to state plainly when relevant: only 16:9 and 9:16, one timeline per project, no transitions menu, no music or sound-effect library, no speaker labels, no audio-only export, 2-hour export limit.

## Redirects

When a page moves or is deleted, add a redirect in `docs.json`. `/guides/connect-claude-code-codex` must keep redirecting to `/connect-claude-chatgpt` because the app links to it.
