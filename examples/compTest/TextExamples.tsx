import React from 'react';
import { Text } from '@/components/Text';

/**
 * Text Component Examples
 * This file demonstrates various usage patterns of the Text component
 */

const TextExamples: React.FC = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h1>Text Component Examples</h1>

      {/* Basic Text Usage */}
      <section>
        <h2>Basic Text</h2>
        <Text>Default text (size 14)</Text>
        <Text size={12}>Small text (12px)</Text>
        <Text size={16}>Medium text (16px)</Text>
        <Text size={18}>Large text (18px)</Text>
        <Text size={20}>Extra large text (20px)</Text>
        <Text size={24}>Huge text (24px)</Text>
      </section>

      {/* Text Colors */}
      <section>
        <h2>Text Colors</h2>
        <Text type="white">White text</Text>
        <Text type="secondary">Secondary text</Text>
        <Text type="success">Success text</Text>
        <Text type="warning">Warning text</Text>
        <Text type="danger">Danger text</Text>
      </section>

      {/* Title Components */}
      <section>
        <h2>Title Components</h2>
        <Text.Title level={1}>Heading 1</Text.Title>
        <Text.Title level={2}>Heading 2</Text.Title>
        <Text.Title level={3}>Heading 3</Text.Title>
        <Text.Title level={1} style={{ color: 'blue' }}>
          Custom styled heading 1
        </Text.Title>
      </section>

      {/* Link Components */}
      <section>
        <h2>Text Links</h2>
        <Text.Link href="https://example.com">Regular link</Text.Link>
        <br />
        <Text.Link href="https://example.com" blank>
          Open in new tab
        </Text.Link>
        <br />
        <Text.Link href="https://example.com" type="success">
          Success colored link
        </Text.Link>
        <br />
        <Text.Link href="https://example.com" size={18}>
          Large link text
        </Text.Link>
        <br />
        <Text.Link disabled href="https://example.com">
          Disabled link
        </Text.Link>
      </section>

      {/* Text with Ellipsis */}
      <section>
        <h2>Text with Ellipsis</h2>
        <div style={{ maxWidth: '200px' }}>
          <Text ellipsis>
            This is a very long text that will be truncated with an ellipsis
          </Text>
          <br />
          <Text ellipsis={{ rows: 2 }} style={{ display: 'block' }}>
            This is a very long text that should span multiple lines and get truncated after 2 lines with an ellipsis.
            This text demonstrates the line-clamp functionality with multiple rows.
          </Text>
          <br />
          <Text ellipsis size={12}>
            Small text with ellipsis: This text will be truncated
          </Text>
        </div>
      </section>

      {/* Disabled Text */}
      <section>
        <h2>Disabled Text</h2>
        <Text disabled>Disabled text</Text>
        <Text disabled type="success">
          Disabled success text
        </Text>
        <Text disabled size={20}>
          Disabled large text
        </Text>
      </section>

      {/* Custom Styles and Classes */}
      <section>
        <h2>Custom Styles</h2>
        <Text
          style={{
            backgroundColor: '#f0f0f0',
            padding: '8px',
            borderRadius: '4px',
            display: 'inline-block'
          }}
        >
          Text with custom inline styles
        </Text>
        <br />
        <Text
          className="bg-blue-100 p-2 rounded inline-block mt-2"
          size={16}
        >
          Text with Tailwind classes
        </Text>
      </section>

      {/* Interactive Example */}
      <section>
        <h2>Interactive Example</h2>
        <Text
          size={16}
          onClick={() => alert('Text clicked!')}
          style={{ cursor: 'pointer', color: '#007bff' }}
        >
          Clickable text with onClick handler
        </Text>
      </section>

      {/* Combined Examples */}
      <section>
        <h2>Combined Examples</h2>
        <div style={{
          border: '1px solid #ccc',
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9'
        }}>
          <Text.Title level={3} style={{ marginBottom: '12px' }}>
            User Profile Card
          </Text.Title>
          <Text size={12} type="secondary" style={{ display: 'block', marginBottom: '4px' }}>
            @username
          </Text>
          <Text size={16} style={{ display: 'block', marginBottom: '8px' }}>
            John Doe
          </Text>
          <Text size={14} ellipsis style={{ display: 'block', marginBottom: '12px' }}>
            This is a long user bio that should be truncated if it's too long for the card
          </Text>
          <Text.Link href="#" size={12} type="success">
            View Profile
          </Text.Link>
        </div>
      </section>
    </div>
  );
};

export default TextExamples;

// Usage in your app:
// import TextExamples from './TextExamples';
// <TextExamples />