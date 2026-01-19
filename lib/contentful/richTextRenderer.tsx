import React from 'react';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES, Document } from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';
import { getImageUrl } from './client';

export const richTextOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong className="font-semibold">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
    [MARKS.CODE]: (text) => (
      <code className="px-2 py-1 bg-gray-100 rounded text-sm font-mono text-[#116366]">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-4xl font-bold mb-6 mt-8 text-gray-900">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-3xl font-bold mb-4 mt-6 text-gray-900">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-2xl font-semibold mb-3 mt-5 text-gray-900">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-xl font-semibold mb-2 mt-4 text-gray-900">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-lg font-semibold mb-2 mt-3 text-gray-900">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-base font-semibold mb-2 mt-2 text-gray-900">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="ml-4">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-[#116366] pl-4 py-2 mb-4 italic text-gray-600 bg-gray-50 rounded-r">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => (
      <hr className="my-8 border-t-2 border-gray-200" />
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title, description } = node.data.target.fields;
      const imageUrl = getImageUrl(node.data.target);

      if (!imageUrl) return null;

      const isImage = file.contentType?.startsWith('image/');

      if (isImage) {
        return (
          <figure className="my-6">
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <Image
                src={imageUrl}
                alt={description || title || 'Content image'}
                fill
                className="object-cover"
              />
            </div>
            {description && (
              <figcaption className="text-sm text-gray-600 mt-2 text-center italic">
                {description}
              </figcaption>
            )}
          </figure>
        );
      }

      return (
        <div className="my-4 p-4 bg-gray-50 rounded-lg">
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#116366] hover:underline flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {title || 'Download file'}
          </a>
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      const isInternal = uri.startsWith('/') || uri.startsWith('#');

      if (isInternal) {
        return (
          <Link href={uri} className="text-[#116366] hover:underline font-medium">
            {children}
          </Link>
        );
      }

      return (
        <a
          href={uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#116366] hover:underline font-medium inline-flex items-center gap-1"
        >
          {children}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      // Handle links to other Contentful entries
      return (
        <Link href="#" className="text-[#116366] hover:underline font-medium">
          {children}
        </Link>
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      // Handle embedded entries (e.g., call-to-action blocks, code snippets, etc.)
      const contentType = node.data.target.sys.contentType?.sys?.id;

      if (contentType === 'codeBlock') {
        const { code, language } = node.data.target.fields;
        return (
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            <code className={`language-${language || 'text'}`}>{code}</code>
          </pre>
        );
      }

      // Default rendering for unknown embedded entries
      return (
        <div className="p-4 bg-gray-50 rounded-lg mb-4 border-l-4 border-[#116366]">
          <p className="text-sm text-gray-600">Embedded content: {contentType}</p>
        </div>
      );
    },
  },
};

export function renderRichText(document: Document): React.JSX.Element {
  if (!document) {
    return <></>;
  }
  return <>{documentToReactComponents(document, richTextOptions)}</>;
}

// Simplified renderer for excerpts (no images, links, etc.)
export const excerptOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <>{children}</>,
    [BLOCKS.HEADING_2]: (node, children) => <>{children}</>,
    [BLOCKS.HEADING_3]: (node, children) => <>{children}</>,
    [BLOCKS.HEADING_4]: (node, children) => <>{children}</>,
    [BLOCKS.HEADING_5]: (node, children) => <>{children}</>,
    [BLOCKS.HEADING_6]: (node, children) => <>{children}</>,
    [BLOCKS.EMBEDDED_ASSET]: () => null,
    [BLOCKS.EMBEDDED_ENTRY]: () => null,
    [INLINES.EMBEDDED_ENTRY]: () => null,
    [INLINES.HYPERLINK]: (node, children) => <>{children}</>,
    [INLINES.ENTRY_HYPERLINK]: (node, children) => <>{children}</>,
  },
};

export function renderExcerpt(document: Document, maxLength = 200): string {
  if (!document) return '';

  const rendered = documentToReactComponents(document, excerptOptions);
  const text = extractText(rendered);

  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

function extractText(element: any): string {
  if (typeof element === 'string') return element;
  if (!element) return '';

  if (Array.isArray(element)) {
    return element.map(extractText).join('');
  }

  if (element.props && element.props.children) {
    return extractText(element.props.children);
  }

  return '';
}
