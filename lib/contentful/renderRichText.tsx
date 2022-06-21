import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import Image from "next/image"
import Link from "next/link"

// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked entries e.g. videoEmbed)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

export const renderOptions = (links: any) => {
  // ASSET BLOCKS
  const assetBlockMap = new Map()

  for (const asset of links.assets.block) {
    assetBlockMap.set(asset.sys.id, asset)
  }

  return {
    // other options...[renderMark:, renderText: renderNode:]

    renderNode: {
      // PARAGRAPH
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        return <p>{children}</p>
      },

      // HYPERLINK
      [INLINES.HYPERLINK]: (node: any, children: any) => {
        return (
          <Link href={node.data.uri}>
            <a className="text-blue-600">{children}</a>
          </Link>
        )
      },

      // IMAGE ASSETS
      [BLOCKS.EMBEDDED_ASSET]: (node: any, next: any) => {
        // find the asset in the assetBlockMap by ID
        const asset = assetBlockMap.get(node.data.target.sys.id)

        return (
          <Image
            key={asset.sys.id}
            src={asset.url}
            width={asset.width}
            height={asset.height}
            alt={asset.title}
            layout="raw"
          />
        )
      },
    },

    renderText: (text: any) => {
      return text
        .split("\n")
        .reduce((children: any, textSegment: any, index: number) => {
          return [...children, index > 0 && <br key={index} />, textSegment]
        }, [])
    },
  }
}
