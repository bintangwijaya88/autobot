CREATE TABLE IF NOT EXISTS knowledge_base (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category VARCHAR(100) NOT NULL,
    question TEXT,
    answer TEXT NOT NULL,
    rich_answer JSONB,
    keywords TSVECTOR,
    priority INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_kb_category ON knowledge_base(category);
CREATE INDEX IF NOT EXISTS idx_kb_keywords ON knowledge_base USING GIN(keywords);

-- Auto-update keywords from question + answer
CREATE OR REPLACE FUNCTION update_kb_keywords() RETURNS TRIGGER AS $$
BEGIN
    NEW.keywords := to_tsvector('simple',
        COALESCE(NEW.question, '') || ' ' || COALESCE(NEW.answer, '')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER kb_keywords_update
    BEFORE INSERT OR UPDATE ON knowledge_base
    FOR EACH ROW EXECUTE FUNCTION update_kb_keywords();
