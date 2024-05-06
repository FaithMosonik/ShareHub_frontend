import { baseApi } from "../baseApi";

const innovationsApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => ({
		// * get a list of innovations
		// TODO define return type of the queries builder.query<Innvations[],void> create innovations type
		innovationsFetchMany: builder.query({
			query: () => ({
				url: "/api/innovations/",
				method: "GET",
			}),
		}),

		// * create an innovation
		innovationsCreate: builder.mutation({
			query: ({ title, description, category, status, co_authors , dataset }) => ({
				url: "/api/innovations/",
				method: "POST",
				body: { title, description, category, status, co_authors , dataset },
			}),
		}),

		// * get one of innovations
		innovationsFetchOne: builder.query({
			query: ({ id }) => ({
				url: "/api/innovations/",
				method: "GET",
				params: { id },
			}),
		}),

		//? When using it in the form how will we be able to know when to use patch or put
		// * update an innovation all fields required
		innovationsUpdatePut: builder.mutation({
			query: ({ id, title, description, category, co_authors }) => ({
				url: "/api/innovations/",
				method: "PUT",
				params: { id },
				body: { title, description, category, co_authors },
			}),
		}),

		// *update an innovation not all fields required
		innovationsUpdatePatch: builder.mutation({
			query: ({ id, title, description, category, co_authors }) => ({
				url: "/api/innovations/",
				method: "PATCH",
				params: { id },
				body: { title, description, category, co_authors },
			}),
		}),

		//* delete an innovation
		innovationsDelete: builder.mutation({
			query: ({ id }) => ({
				url: "/api/innovations/",
				method: "DELETE",
				params: { id },
			}),
		}),
	}),
});

export const {
	useInnovationsCreateMutation,
	useInnovationsDeleteMutation,
	useInnovationsFetchManyQuery,
	useInnovationsFetchOneQuery,
	useInnovationsUpdatePatchMutation,
	useInnovationsUpdatePutMutation,
} = innovationsApiSlice;