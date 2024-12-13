import { Typography } from "@/components/ui/Typography";

export default function Page() {
    return (
        <div className="space-y-5">
            <Typography variant="h1">H1. Codixfy UI Heading</Typography>
            <Typography variant="h2">H2. Codixfy UI Heading</Typography>
            <Typography variant="h3">H3. Codixfy UI Heading</Typography>
            <Typography variant="h4">H4. Codixfy UI Heading</Typography>
            <Typography variant="h5">H5. Codixfy UI Heading</Typography>
            <Typography variant="h6">H6. Codixfy UI Heading</Typography>
            <Typography variant="title">Title. Codixfy UI</Typography>
            <Typography variant="subtitle1">Subtitle1. Codixfy UI</Typography>
            <Typography variant="subtitle2">Subtitle2. Codixfy UI</Typography>
            <Typography variant="body1">Body1. Codixfy UI Text</Typography>
            <Typography variant="body2">Body2. Codixfy UI Text</Typography>
            <Typography variant="caption">Caption. Codixfy UI Text</Typography>
            <Typography variant="overline">Overline. Codixfy UI Text</Typography>

            <hr />

            <Typography variant="h1" url="#">H1. Codixfy UI Heading Link</Typography>
            <Typography variant="h2" url="#">H2. Codixfy UI Heading Link</Typography>
            <Typography variant="h3" url="#">H3. Codixfy UI Heading Link</Typography>
            <Typography variant="h4" url="#">H4. Codixfy UI Heading Link</Typography>
            <Typography variant="h5" url="#">H5. Codixfy UI Heading Link</Typography>
            <Typography variant="h6" url="#">H6. Codixfy UI Heading Link</Typography>
            <Typography variant="title" url="#">Title. Codixfy UI Link</Typography>
            <Typography variant="subtitle1" url="#">Subtitle1. Codixfy UI Link</Typography>
            <Typography variant="subtitle2" url="#">Subtitle2. Codixfy UI Link</Typography>
            <Typography variant="body1" url="#">Body1. Codixfy UI Link</Typography>
            <Typography variant="body2" url="#">Body2. Codixfy UI Link</Typography>
            <Typography variant="caption" url="#">Caption. Codixfy UI Link</Typography>
            <Typography variant="overline" url="#">Overline. Codixfy UI Link</Typography>
        </div>
    );
}
