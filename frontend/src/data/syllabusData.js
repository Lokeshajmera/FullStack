/**
 * Batch-wise syllabus data – all PDFs served from /public/pdfs/syllabus/
 *
 * Columns:  fyBtech | syBtech | tyBtech | finalYear
 *
 * Rules:
 * - fyBtech is shown ONLY for the current/latest incoming batch (2025-29).
 *   Older batches are already past FY, so fyBtech = null → shows "—".
 * - null entry = "—"  |  entry with pdf: null = "Coming soon"
 */
export const syllabusData = [
    /* ── Batch 2021-25 (currently Final Year) ── */
    {
        batch: '2021-25',
        fyBtech:   null,
        syBtech:   { label: 'Syllabus 2022-23',                    pdf: '/pdfs/syllabus/SY_BTech_AIML_Syllabus_2022-23.pdf' },
        tyBtech:   { label: 'Syllabus 2023-24',                    pdf: '/pdfs/syllabus/TY-B.Tech-Syllabus-2023-24.pdf' },
        finalYear: { label: 'Syllabus 2024-25 (Regulations 2021)', pdf: '/pdfs/syllabus/Final-year-syllabus-2024-25-Reg2021.pdf' },
    },
    /* ── Batch 2022-26 (currently TY) ── */
    {
        batch: '2022-26',
        fyBtech:   null,
        syBtech:   { label: 'Syllabus 2023-24 (Minor Updates)',     pdf: '/pdfs/syllabus/SY_Btech_2023-14_minor_updates.pdf' },
        tyBtech:   { label: 'Syllabus 2024-25 (Regulations 2021)', pdf: '/pdfs/syllabus/TY-Btech-2024-25-Reg2021.pdf' },
        finalYear: null,
    },
    /* ── Batch 2023-27 (currently SY) ── */
    {
        batch: '2023-27',
        fyBtech:   null,
        syBtech:   { label: 'Syllabus 2024-25 (Regulations 2023)', pdf: '/pdfs/syllabus/SY-BTech-2024-25_Regulations_2023.pdf' },
        tyBtech:   { label: 'Syllabus 2025-26 (Regulations 2023)', pdf: '/pdfs/syllabus/TY-Btech-2025-26-Reg2023.pdf' },
        finalYear: null,
    },
    /* ── Batch 2024-28 (currently FY / latest incoming batch) ── */
    {
        batch: '2024-28',
        fyBtech:   { label: '1st Year Syllabus',                   pdf: '/pdfs/syllabus/1st-year-aiml.pdf' },
        syBtech:   { label: 'Syllabus 2025-26 (Regulations 2023)', pdf: '/pdfs/syllabus/Sy_Btech-2025-26-regulations-2023.pdf' },
        tyBtech:   null,
        finalYear: null,
    },
];
