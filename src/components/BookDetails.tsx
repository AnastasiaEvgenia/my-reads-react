export const function BookDetails() {
  return (
	  <Box sx={{ width: 400, p: 3 }}>
		  <Box
			  sx={{
				  display: "flex",
				  justifyContent: "space-between",
				  mb: 2,
			  }}
		  >
			  <Typography variant="h5" component="h2">
				  Book Details
			  </Typography>
			  <IconButton onClick={handleDrawerClose}>
				  <CloseIcon />
			  </IconButton>
		  </Box>

		  <Divider sx={{ mb: 2 }} />

		  {imageUrl && (
			  <Box sx={{ textAlign: "center", mb: 3 }}>
				  <img
					  src={imageUrl}
					  alt={book.title}
					  style={{
						  maxWidth: "100%",
						  maxHeight: 300,
						  objectFit: "contain",
					  }}
				  />
			  </Box>
		  )}

		  <Stack spacing={2}>
			  <Box>
				  <Typography variant="h6" gutterBottom>
					  {book.title}
				  </Typography>
				  {book.subtitle && (
					  <Typography
						  variant="subtitle1"
						  color="text.secondary"
						  gutterBottom
					  >
						  {book.subtitle}
					  </Typography>
				  )}
			  </Box>

			  {book.authors && book.authors.length > 0 && (
				  <Box>
					  <Typography
						  variant="subtitle2"
						  color="text.secondary"
					  >
						  Author(s)
					  </Typography>
					  <Typography variant="body1">
						  {book.authors.join(", ")}
					  </Typography>
				  </Box>
			  )}

			  {book.publisher && (
				  <Box>
					  <Typography
						  variant="subtitle2"
						  color="text.secondary"
					  >
						  Publisher
					  </Typography>
					  <Typography variant="body1">
						  {book.publisher}
					  </Typography>
				  </Box>
			  )}

			  {book.publishedDate && (
				  <Box>
					  <Typography
						  variant="subtitle2"
						  color="text.secondary"
					  >
						  Published Date
					  </Typography>
					  <Typography variant="body1">
						  {book.publishedDate}
					  </Typography>
				  </Box>
			  )}

			  {book.pageCount && (
				  <Box>
					  <Typography
						  variant="subtitle2"
						  color="text.secondary"
					  >
						  Page Count
					  </Typography>
					  <Typography variant="body1">
						  {book.pageCount} pages
					  </Typography>
				  </Box>
			  )}

			  {book.language && (
				  <Box>
					  <Typography
						  variant="subtitle2"
						  color="text.secondary"
					  >
						  Language
					  </Typography>
					  <Typography variant="body1">
						  {book.language.toUpperCase()}
					  </Typography>
				  </Box>
			  )}

			  {book.maturityRating && (
				  <Box>
					  <Typography
						  variant="subtitle2"
						  color="text.secondary"
					  >
						  Maturity Rating
					  </Typography>
					  <Chip
						  label={
							  book.maturityRating === "NOT_MATURE"
								  ? "All Ages"
								  : book.maturityRating.replace(
									  "_",
									  " ",
								  )
						  }
						  size="small"
						  sx={{
							  background:
								  book.maturityRating === "NOT_MATURE"
									  ? "rgba(76, 175, 80, 0.2)"
									  : "rgba(255, 165, 0, 0.2)",
							  border:
								  book.maturityRating === "NOT_MATURE"
									  ? "1px solid rgba(76, 175, 80, 0.4)"
									  : "1px solid rgba(255, 165, 0, 0.4)",
							  color:
								  book.maturityRating === "NOT_MATURE"
									  ? "#81c784"
									  : "orange",
						  }}
					  />
				  </Box>
			  )}

			  {book.categories && book.categories.length > 0 && (
				  <Box>
					  <Typography
						  variant="subtitle2"
						  color="text.secondary"
						  gutterBottom
					  >
						  Categories
					  </Typography>
					  <Box
						  sx={{
							  display: "flex",
							  gap: 1,
							  flexWrap: "wrap",
						  }}
					  >
						  {book.categories.map((category, index) => (
							  <Chip
								  key={index}
								  label={category}
								  size="small"
							  />
						  ))}
					  </Box>
				  </Box>
			  )}

			  {book.averageRating && (
				  <Box>
					  <Typography
						  variant="subtitle2"
						  color="text.secondary"
					  >
						  Rating
					  </Typography>
					  <Typography variant="body1">
						  {book.averageRating} / 5
						  {book.ratingsCount &&
							  ` (${book.ratingsCount} ratings)`}
					  </Typography>
				  </Box>
			  )}

			  {book.description && (
				  <Box>
					  <Typography
						  variant="subtitle2"
						  color="text.secondary"
						  gutterBottom
					  >
						  Description
					  </Typography>
					  <Typography variant="body2">
						  {book.description}
					  </Typography>
				  </Box>
			  )}

			  {book.industryIdentifiers &&
				  book.industryIdentifiers.length > 0 && (
					  <Box>
						  <Typography
							  variant="subtitle2"
							  color="text.secondary"
							  gutterBottom
						  >
							  ISBN
						  </Typography>
						  {book.industryIdentifiers.map(
							  (id, index) => (
								  <Typography
									  key={index}
									  variant="body2"
								  >
									  {id.type}: {id.identifier}
								  </Typography>
							  ),
						  )}
					  </Box>
				  )}
		  </Stack>
	  </Box>
  );
}